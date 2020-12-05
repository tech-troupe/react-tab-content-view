import React from 'react';
import {TabContent} from'./TabContent';


class ReactTabContentView extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          groupTitle: "group1",
          groupContent : [
            {
              titile: "title1",
              content:"content1"
            },
            {
              titile: "title2",
              content:"content2"
            }
          ]
        },
        {
          groupTitle: "group2",
          groupContent : [
            {
              titile: "title3",
              content:"content3"
            },
            {
              titile: "title4",
              content:"content4"
            }
          ]
        }
      ]
    };
  }

  static defaultProps = {
    src:{},
    titleType: 'chips'
  }

  componentDidMount() {
    //TBD
  }

  componentDidUpdate() {
    //TBD
  }

  componentWillUnmount() {
    //TBD
  }

  validateState = (state) => {
    //TBD
  }

  render() {
    return (
      <div className='react-tab-content-view'>
        <TabContent />
      </div>
    );
  }
}

export default ReactTabContentView;
