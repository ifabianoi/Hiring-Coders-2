import homeSectionOne from '../../companents/sections/homeSectionOne'
import homeSectionTwo from '../../companents/sections/homeSectionTwo'
import floatImage from '../../companents/float/floatImage'

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${homeSectionOne}
            ${homeSectionTwo}
            ${floatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;

