// Import React
import React from "react";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  craneBirds: require("../assets/crane.birds.jpg"),
  codeAst: require("../assets/code.ast.png"),
  codeCss: require("../assets/code.css.png"),
  danm: require("../assets/danm.jpg"),
  elseloop: require("../assets/elseloop.avatar.jpg"),
  iconDan: require("../assets/icondan.png")
};

const RoundImg = styled(Image)`
  border: 10px solid #444;
  border-radius: 50%;
  height: 15vw;
  width: 15vw;
`;

const theme = createTheme({
  primary: "white",
  secondary: "black",
  yellow: "#FF0",
  blue: "#1BE7FF",
  orange: "#E8AA14",
  red: "#FF5714"
}, {
  primary: {
    name: "Work Sans",
    googleFont: true,
    styles: [ "300", "400", "700", "800" ]
  },
  secondary: "Garamond"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgImage={images.craneBirds} bgDarken={0.75}>
          <Text textSize="6rem">👋👋👋</Text>
          <Heading size={1} textSize="12rem" fill lineHeight={1} textColor="primary">
            Oh hello, PostCSS!
          </Heading>
          <Text margin="4rem auto 0" textColor="blue" size={1} fill bold>
            Front End PDX 👨🏼‍💻👩🏾‍💻👨🏻‍💻👩🏼‍💻 Jan. 23, 2018
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="red">
          <Heading size={2} textColor="primary" margin="0 0 4rem">Dan Manchester</Heading>

          <Layout>
            <Fill margin="0 1ch 0 1ch">
              <RoundImg display="block" src={images.iconDan} bgColor="white" />
            </Fill>
            <Fill margin="0 1ch">
              <RoundImg display="block" src={images.danm} />
            </Fill>
            <Fill margin="0 1ch">
              <RoundImg display="block" src={images.elseloop} />
            </Fill>
          </Layout>

          <Heading size={2} textColor="primary" margin="4rem 0 0">@elseloop</Heading>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="blue">
          <Image src={images.codeCss} />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="blue">
          <Image src={images.codeAst} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
