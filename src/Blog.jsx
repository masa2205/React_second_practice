import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      order: 2,
    };
  }

  //  公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
      order: !1,
    });
  };

  render() {
    return (
      <>
        <Article
          title="Reactの使い方"
          order={this.state.order}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
        />
      </>
    );
  }
}

export default Blog;
