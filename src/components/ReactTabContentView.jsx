import React from 'react';


export default class ReactTabContentView extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          groupName: "group1",
          title1: "content1",
          title2: "content2",
        },
        {
          groupName: "group2",
          title3: "content3",
          title4: "content4",
        },
      ],
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
