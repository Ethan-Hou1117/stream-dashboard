import { Card, List, ListItem, Title } from "@tremor/react";
const img_path =  "../../public/images/";
import PopupImage from './popupimage'

const claims = [
  {
    number: "98767898",
    rating: "Text UPDATE",
    urgency_img: "🔴",
     popup_img: ""
  },
  {
    number: "676543",
    rating: "Text UPDATE",
    urgency_img: "🟢",
    popup_img: ""
  },
  {
    number: "19484549",
    rating: "Text UPDATE",
    urgency_img: "🟢",
    popup_img: ""
  },
  {
    number: "70848213",
    rating: "Text UPDATE",
    urgency_img: "🔴",
    popup_img: ""
  },
  {
    number: "7927497974",
    rating: "Text UPDATE",
    urgency_img: "🟡",
    popup_img: ""
  },
  {
    number: "940820480",
    rating: "Text UPDATE",
    urgency_img: "🔴",
    popup_img: ""
  },
];

export default function Chart() { 
  //const claims = searchParams.q ?? '';
  //const users = await queryBuilder
    //.selectFrom('users')
   // .execute();

  
  return (
  <Card className="max-w">
    <Title className="mb-2" style = {{color: '#7b6be9'}}>Latest Updates</Title>
    <List>
      {claims.map((item) => (
        <ListItem key={item.number}>
          <span>{item.number}</span>
          <span>{item.rating}</span>
          <span>{item.urgency_img}</span>
         <span><PopupImage src={"/images/upper-right-arrow-square-button-outlined-symbol.png"} /></span> 
        </ListItem>
      ))}
    </List>
  </Card>
)
};