import Card from '@/components/cards/Card';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState } from 'react';
import cocktailsList from "../data/cocktailsList.json"
import { useRouter } from 'next/router';

function InitialPage() {

  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const cocktails = [
    {
        title:"Whiskey Sour", 
        description:"The whiskey sour is a mixed drink containing whiskey, lemon juice, sugar, and optionally, a dash of egg white. It is a type of sour, a mixed drink with a base spirit, citrus juice, and a sweetener."
    },
    {
        title:"Negroni", 
        description:"A Negroni is an Italian cocktail, made of one part gin, one part vermouth rosso and one part Campari, garnished with orange peel. "
    },
    {
        title:"Paloma", 
        description:"The paloma is a tequila-based cocktail. This drink is most commonly prepared by mixing tequila, lime juice, and a grapefruit-flavored soda such as Fresca, Squirt, or Jarritos and served on the rocks"
    },
    {
      title:"Jungle Bird", 
      description:"A jungle bird cocktail is a tropical drink made with rum, pineapple juice, and Campari."
    },
    {
      title:"Espresso Martini", 
      description:"The espresso martini, also known as a vodka espresso, is a cold caffeinated alcoholic drink made with espresso, coffee liqueur, and vodka."
    },
    
];

  const handleSearch = (event) =>{
    setSearchInput(event.target.value);
  }

  const search = () => {
    router.push({
      pathname: "/result",
      query: {
        cocktail: searchInput,
      }
    })
  }

  return (
    <DefaultLayout>
      <div className='bg-white w-full border rounded-md border-gray p-4 shadow'>
        <div>
          <input type="text" className="w-1/2 mb-4 pl-4 bg-white  border border-gray text-gray text-md rounded-xl p-2" placeholder='Search here' onChange={handleSearch} value={searchInput}/>
          <button onClick={search} className=' ml-4 bg-red text-white rounded-lg p-2'>Search</button>
        </div>
        <div className=''>
          {/* {cocktailsList.filter(list =>{
              if(searchInput === ''){
                return list
              }else if(list.title.toLowerCase().includes(searchInput.toLowerCase())){
                return list
              }
            }).map(list =>{
              <Card title="Welcome to Velvet by Luis" description="Please search for some cocktails"/>
            })
          } */}
          <Card title="Welcome to Velvet by Luis" description="Please search for some cocktails"/>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default InitialPage;
