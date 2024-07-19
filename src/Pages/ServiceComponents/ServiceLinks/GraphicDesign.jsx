import React from 'react';
import figmaLogo from '../../../assets/Logo/figma.png';
import canvaLogo from '../../../assets/Logo/canva.png';
import coralLogo from '../../../assets/Logo/coral.png';
import photoshopLogo from '../../../assets/Logo/photoshop.png';
import illustratorLogo from '../../../assets/Logo/illustrator.png';
// import sketchLogo from '../../../assets/Logo/sketch.png';
import inkscapeLogo from '../../../assets/Logo/inkscape.png';

const GraphicDesign = () => {
  const tools = [
    {
      name: 'Figma',
      description: 'Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.',
      logo: figmaLogo,
    },
    {
      name: 'Canva',
      description: 'Canva is a graphic design platform that allows users to create social media graphics, presentations, posters, documents, and other visual content.',
      logo: canvaLogo,
    },
    {
      name: 'Coral',
      description: 'CorelDRAW is a vector graphics editor developed and marketed by Corel Corporation. It is used for logo, photo editing, and web design.',
      logo: coralLogo,
    },
    {
      name: 'Adobe Photoshop',
      description: 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. It has become the industry standard in raster graphics editing, but also supports vector graphics.',
      logo: photoshopLogo,
    },
    {
      name: 'Adobe Illustrator',
      description: 'Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. It is used to create logos, graphics, cartoons, and fonts.',
      logo: illustratorLogo,
    },
    // {
    //   name: 'Sketch',
    //   description: 'Sketch is a vector graphics editor for macOS. It is primarily used for UI/UX design of websites and mobile apps, offering a range of powerful tools and integrations.',
    //   logo: sketchLogo,
    // },
    {
      name: 'Inkscape',
      description: 'Inkscape is a free and open-source vector graphics editor. It is used for creating or editing vector graphics such as illustrations, diagrams, line arts, charts, logos, and complex paintings.',
      logo: inkscapeLogo,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4  gap-4">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="w-[90%] flex flex-col sm:flex-row bg-black hover:shadow-neomorphism rounded-lg p-6 m-4 transform transition-transform hover:scale-105 gap-4 text-center sm:text-left"
        >
          <div className="flex justify-center items-center w-full sm:w-[20%]">
            <img src={tool.logo} alt={`${tool.name} logo`} className="w-24 h-24 object-contain" />
          </div>
          <div className='w-full sm:w-[80%]'>
            <h3 className="text-2xl font-bold mb-4 tracking-wider text-cyan-400">{tool.name}</h3>
            <p className="mb-4 tracking-wider">{tool.description}</p>

          </div>
        </div>
      ))}
    </div>

  );
};

export default GraphicDesign;
