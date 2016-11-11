import React from 'react'
const regeneratorRuntime =  require("regenerator-runtime");

const SliderImage = (function* () {
  var index = 0
  while(true) {
    let source = 'http://placehold.it/240x240'
    if (this.props.images) {
      source = 'img/' + this.props.images[index]
      index ++
      if (index >= this.props.images.length) {
        index = 0
      }
    }
    yield source
  }
})()

console.log(SliderImage)

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Models',
      imageMarginLeft: 0,
      imagePauseTime: 0
    }
    this.currentIndex = 0
    this.sliderImages = [
      this.getNextImage(),
      this.getNextImage()
    ]
  }
  render() {
    const style = {
      width: '240px',
      height: '240px',
      // textAlign: 'center',
      // padding: '20px',
      overflow: 'hidden',
      border: '.5px solid #BBB',
      borderRadius: '30px',
      display: 'flex'
      // justifyContent: 'center'
    }
 
    return (
      <div style={style}>
        {this.getSliderImages()}
      </div>
    )
  }
  getSliderImages() {
    const imageStyle = {
      marginLeft: this.state.imageMarginLeft
    }

    return [
      <img key="0" id="img1" src={this.sliderImages[0]} width="240" style={imageStyle}/>,
      <img key="1" id="img2" src={this.sliderImages[1]} width="240"/>
    ]
  }
  getNextImage() {
    // let imgPath = 'http://placehold.it/240x240'
    let imgPath = 'img/placeholder.jpg'
    if (this.props.images) {
      imgPath = 'img/' + this.props.images[this.currentIndex]
      console.log(imgPath)

      this.currentIndex ++

      if (this.currentIndex >= this.props.images.length) {
        this.currentIndex = 0
      }
    }
    return imgPath
  }
  update(time) {
    requestAnimationFrame(this.update.bind(this))

    let imageMarginLeft = this.state.imageMarginLeft

    imageMarginLeft -= 1

    if (imageMarginLeft <= -240) {
      imageMarginLeft = 0

      let img1 = document.querySelector('#img1')
      let img2 = document.querySelector('#img2')

      this.sliderImages = [
        this.sliderImages[1],
        this.getNextImage()
      ]
    }

    this.setState({imageMarginLeft})
  }
  componentDidMount() {
    this.setState(this.props)
    requestAnimationFrame(this.update.bind(this))
  }
}
