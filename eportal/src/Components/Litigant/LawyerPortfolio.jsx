// LawyerPortfolio.js
import React ,{useState, useEffect} from 'react';
import LawyerCard from './LawyerCard';
import './LawyerPortfolio.css';
import Search from './Search';


const lawyersData = [
  { name: ' Advocate Nihal', specialization: 'Criminal Defense',description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatibus consequuntur tenetur praesentium, aut voluptatum similique distinctio voluptatem dolore, mollitia ea nihil maxime pariatur, sapiente nam officiis quam hic aliquid!", imageUrl: 'https://th.bing.com/th/id/OIP.usYnwXgh7l4OZf2TED0vFAHaE8?rs=1&pid=ImgDetMain' },
  { name: 'Advocate vineesh', specialization: 'Civil ',  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique officia veritatis deleniti soluta uidhfa! frd ger gomer ero similique officia veritatis deleniti soluta uidhf  ", imageUrl: 'https://th.bing.com/th/id/OIP.usYnwXgh7l4OZf2TED0vFAHaE8?rs=1&pid=ImgDetMain' },


];

const LawyerPortfolio = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLawyers , setFilteredLawyers] = useState(lawyersData);

  useEffect(() => {
    const filtered = lawyersData.filter(lawyer =>
      lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lawyer.specialization.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      setFilteredLawyers(filtered);
  }, [searchQuery]);

  return (
    <div className="chooselawyer">
      <div className="lawyerCards">
    <div className="lawyer-portfolio">
      <input id='searchbar' type="search" placeholder='🔍    Searching for Advocates....' 
      value = {searchQuery} 
      onChange = {(e) => setSearchQuery(e.target.value)}
      />

      {filteredLawyers.map((lawyer, index) => (
        <LawyerCard key={index} {...lawyer} />
      ))}
    </div>
    </div>
    </div>
  );
};

export default LawyerPortfolio;
