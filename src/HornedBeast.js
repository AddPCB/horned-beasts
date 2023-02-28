import { Component } from "react"
import './HornedBeast.css';
function importAll(r) {
  r.keys().forEach(r)
}

const fileTitle = iKey => {
  // Remove the path and file extension from the file name
  const fileName = iKey.split('/').pop().split('.')[0];

  let tKey = fileName.replace(/-/g, ' ');
  return tKey.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class HornedBeast extends Component {
  constructor(props) {
    super(props);
    importAll(require.context('./beasts', true, /\.png$/));
    const imagePaths = require.context('./beasts', false, /\.png$/);
    const images = this.genTitles(imagePaths.keys().map(imagePaths))
    this.state = {
      images: images,
      chosenImage: images[props.index]
    };
  }

  genTitles(images) {
    return images.map((image, index) => {
      return {
        key: index,
        src: image,
        alt: fileTitle(image),
        title: `An image of the horned beast: ${fileTitle(image)}`
      }
    })
  }

  render() {
    return (
      <div className="HornedBeast">
        <figure key={this.state.chosenImage.key}>
          <img src={this.state.chosenImage.src} alt={this.state.chosenImage.alt} title={this.state.chosenImage.title} fluid key={this.state.chosenImage.key} />
          <figcaption>{this.state.chosenImage.alt}</figcaption>
        </figure>
      </div>
    );
  }
}

export default HornedBeast;