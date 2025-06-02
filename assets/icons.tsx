import { AntDesign, Feather } from "@expo/vector-icons";
import { JSX } from "react";
import { Cart, Favorite, Home, Profile } from "./svg";

export const icons: Record<string, (props: { color: string }) => JSX.Element> = {
  index: (props) => <Home {...props} />,
  cart: (props) => <Cart {...props} />,
  favorites: (props) => <Favorite {...props} />,
  profile: (props) => <Profile {...props} />,
};


export const items = [
  {
    index: {
      name: "index",
      icon: (props: any) => <AntDesign name={"home"} size={26} {...props} />,
      main: false,
    },
    cart: {
      name: "index",
      icon: (props: any) => <Feather name={"compass"} size={26} {...props} />,
      main: false,
    },
    favorites: {
      name: "index",
      icon: (props: any) => (
        <AntDesign name={"pluscircleo"} size={26} {...props} />
      ),
      main: false,
    },
    profile: {
      name: "index",
      icon: (props: any) => <AntDesign name={"user"} size={26} {...props} />,
      main: false,
    },
  },
];
