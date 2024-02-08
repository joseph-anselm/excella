import React from 'react';

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
      <div className="mb-4">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded" />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-[#061956]">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#7FB000] text-sm font-semibold hover:underline">
          Read More
        </a>
      </div>
    </div>
  </a>
  );
};

const SectionB = () => {
  const cardData = [
    {
      title: 'Brine Filtration',
      description: 'Excela Energy Services Limited (EESL) is your dedicated partner for top-notch oilfield filtration equipment and services. We focus on delivering clean wellbores, minimizing debris, drilling fluid residue, and solids to enhance overall well productivity.',
      imageUrl: '/images/card1.jpg',
      link: '#',
    },
    {
      title: 'Well-Bore Cleaning',
      description: 'Persistent wellbore debris poses risks to well integrity and productivity. Our comprehensive solutions address diverse debris types, ensuring a clean wellbore, safeguarding equipment, and minimizing production losses.',
      imageUrl: '/images/card2.jpg',
      link: '#',
    },
    {
      title: 'Mud-Logging',
      description: 'Mud Logging Excellence: Our advanced units, equipment, and services at EESL adhere to the highest standards, delivering exceptional performance both Onshore and Offshore.',
      imageUrl: '/images/card3.jpg',
      link: '#',
    },
    {
      title: 'Equipments',
      description: 'EESL boasts cutting-edge equipment exceeding client expectations, supported by established global partnerships.',
      imageUrl: '/images/card4.jpg',
      link: '#',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="mb-8 flex-grow">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionB;
