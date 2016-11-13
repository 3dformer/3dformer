import React from 'react'
import regeneratorRuntime from 'regenerator-runtime'
import obj from 'webgl-obj-loader'

function createShader(data) {
  const vertex = data.split('[vertex]\n')[1].split('\n[fragment]')[0]
  const fragment = data.split('[fragment]\n')[1]
  return { vertex, fragment }
}

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Models'
    }
  }
  componentDidUpdate() {
    if (!this.state.regl) return
    if (!this.state.monkeyObj) return
    if (!this.state.entityShader) return

      const { regl, monkeyObj, entityShader } = this.state

    this.state.regl.clear({
      color: [.2, .2, .2, 255],
      depth: 1
    })
    this.state.regl({
      frag: entityShader.fragment,
      vert: entityShader.vertex,
      attributes: {
        position: monkeyObj.vertices,
        uv: monkeyObj.textures
      },
      elements: monkeyObj.indices,
      uniforms: {
        // transform: getTransform,
        // view: camera.viewMatrix,
        // projection: projection
      }
    })()
  }
  render() {
    const style = {
      background: '#333',
      width: '240px',
      height: '240px',
      overflow: 'hidden',
      border: '.5px solid #BBB',
      borderRadius: '30px'
    }
 
    return (
      <canvas ref="sceneCanvas" style={style}>
      </canvas>
    )
  }
  componentDidMount() {
    this.setState(this.props)

    const canvas = this.refs.sceneCanvas
    const regl = require('regl')(canvas)
    this.setState({regl})

    require('resl')({
      manifest: {
        monkeyObj: {
          type: "text",
          src: 'monkey.obj',
          parser: (data) => new obj.Mesh(data)
        },
        entityShader: {
          type: "text",
          src: 'entity.glsl',
          parser: (data) => createShader(data)
        }
      },
      onDone: ({monkeyObj, entityShader}) => {
        this.setState({monkeyObj, entityShader})
      }
    })
  }
}
