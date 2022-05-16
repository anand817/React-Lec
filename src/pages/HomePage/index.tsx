import React from "react";
import { randomAnimalImage } from "../../constants/urls";
import ApiService from "../../services/api/apiService";
import { HomePageProps } from "../../types/homePagePropType";
import { HomePageState } from "../../types/homePageStateType";
import { Link } from "react-router-dom";

class HomePage extends React.Component<HomePageProps, HomePageState> {
  state: HomePageState = {
    assetImage: false,
    loading: false,
  };

  constructor(props: HomePageProps) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    ApiService.get(randomAnimalImage).then((data) => {
      console.log("data fetched");
      // console.log(randomImage);
      this.setState({
        loading: false,
        animalData: data,
      });
    });
  }

  clickHandler() {
    this.setState((state, _) => ({
      assetImage: !state.assetImage,
    }));
    console.log(this.state.animalData);
  }

  render() {
    const { title } = this.props;
    const { assetImage, loading, animalData } = this.state;
    return (
      <React.Fragment>
        <div>Hello World</div>
        <div>{title}</div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <img
            height="100"
            width="100"
            src={
              assetImage
                ? "../assets/images/randomImage.jpg"
                : animalData?.image_link
            }
            onClick={this.clickHandler.bind(this)}
            alt=""
          />
        )}
        <Link to="/second">Second page</Link>
      </React.Fragment>
    );
  }
}

export default HomePage;
