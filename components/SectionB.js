import React from 'react';

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </a>
  );
};

const SectionB = () => {
  const cardData = [
    {
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/images/card1.jpg',
      link: '#',
    },
    {
      title: 'Card 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/images/card2.jpg',
      link: '#',
    },
    {
      title: 'Card 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageUrl: '/images/card3.jpg',
      link: '#',
    },
    {
      title: 'Card 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageUrl: '/images/card4.jpg',
      link: '#',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="mb-8">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionB;
