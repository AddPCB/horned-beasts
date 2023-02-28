import { Component } from "react"
import './BeastGarden.css';
function importAll(r) {
  r.keys().forEach(r)
}

const fileTitle = iKey => {
  // Remove the path and file extension from the file name
  const fileName = iKey.split('/').pop().split('.')[0];

  let tKey = fileName.replace(/-/g, ' ');
  return tKey.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class BeastGarden extends Component {
  constructor(props) {
    super(props);
    importAll(require.context('./beasts', true, /\.png$/));
    const imagePaths = require.context('./beasts', false, /\.png$/);
    this.state = {
      images: this.genTitles(imagePaths.keys().map(imagePaths))
    };
  }

  genTitles(images) {
    return images.map(image => {
      return {
        src: image,
        alt: `An image of the horned beast: ${fileTitle(image)}`,
        title: fileTitle(image)
      }
    })
  }

  render() {
    return (
      <div className="BeastGarden">
        <div className="container-fluid">
          {this.state.images.map(image => (
            <figure key={image.key}>
              <img src={image.src} alt={image.alt} title={image.title} fluid key={image.key} />
              <figcaption>{image.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
}
export default BeastGarden;