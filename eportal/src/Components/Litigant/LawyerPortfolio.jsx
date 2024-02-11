


import React, { useEffect, useState } from 'react';
import LawyerCard from './LawyerCard';
import rating from './rating';
import './LawyerPortfolio.css';

const LawyerPortfolio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [lawyers, setLawyers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedRating, setSelectedRating] = useState(5); // Default rating
  const [selectedExperienceRange, setSelectedExperienceRange] = useState('');

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/lawyers');
        const data = await response.json();
        setLawyers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLawyers();
  }, []);

  const filterLawyers = () => {
    let filtered = lawyers;

    if (selectedFilter === 'rating' && selectedRating !== '') {
      const selectedRatingString = selectedRating.toString();
      filtered = filtered.filter((lawyer) => lawyer.rating && lawyer.rating.toString() === selectedRatingString);
    }

    if (selectedFilter === 'freeService') {
      filtered = filtered.filter((lawyer) => lawyer.isFreeService);
    }

    if (selectedFilter === 'experience' && selectedExperienceRange !== '') {
      const [min, max] = selectedExperienceRange.split('-');
      filtered = filtered.filter(
        (lawyer) => lawyer.experience >= parseInt(min, 10) && lawyer.experience <= parseInt(max, 10)
      );
    }

    return filtered;
  };

  const filteredLawyers = filterLawyers().filter((lawyer) =>
    (lawyer.name && lawyer.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (lawyer.lawyertype && lawyer.lawyertype.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (lawyer.state && lawyer.state.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (lawyer.experience && lawyer.experience.toString().includes(searchQuery.toString()))
  );

  return (
    <div className="chooselawyer">
      <div className="lawyerCards">
        <div className="lawyer-portfolio">
          <input
            id="searchbar"
            type="search"
            placeholder="🔍 Searching for Advocates...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className='filter'>
            <select
              id="filter"
              value={selectedFilter}
              onChange={(e) => {
                setSelectedFilter(e.target.value);
                if (e.target.value !== 'experience') {
                  setSelectedRating('');
                }
              }}
            >
              <option value="">--- Select Filter ---</option>
              <option value="rate">Rating</option>
              <option value="freeService">Free Service Lawyers</option>
              <option value="experience">Years of Experience</option>
            </select>

            {selectedFilter === 'rating' && (
              <select
                id="ratingFilter"
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                <option value="">--- Select Rating ---</option>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            )}

            {selectedFilter === 'experience' && (
              <select
                id="experienceFilter"
                value={selectedExperienceRange}
                onChange={(e) => setSelectedExperienceRange(e.target.value)}
              >
                <option value="">--- Select Experience Range ---</option>
                <option value="0-5">0-5 Years</option>
                <option value="5-10">5-10 Years</option>
                <option value="10-15">10-15 Years</option>
                <option value="15+">15+ Years</option>
              </select>
            )}
          </div>

          {filteredLawyers.map((lawyer, index) => (
            <LawyerCard key={index} {...lawyer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawyerPortfolio;