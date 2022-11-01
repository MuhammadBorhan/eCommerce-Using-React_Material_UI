import { Box, Button, ImageList, ImageListItem, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

export const MuiImageList = () => {
  const [value, setValue] = useState(10);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${value}`)
      .then((res) => res.json())
      .then((data) => setDatas(data.results));
  }, [value, datas]);
  return (
    <Box>
      <hr />
      <h2>Mainaining Value: {value}</h2>
      <hr />
      <h2>Fetching Random Value:{datas.length}</h2>
      <Box>
        <Stack left="10px" bottom="50%">
          <Button
            onClick={() => {
              value >= 1 && setValue(value - 1);
            }}
          >
            Remove
          </Button>
          <Button onClick={() => setValue(value + 1)}>Add</Button>
        </Stack>
      </Box>
      <Stack spacing={4}>
        <Box sx={{ width: "800", height: 300 }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {datas.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.picture.large}?w=248&fit=crop&auto=format&dpr=2`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </Box>
  );
};

const itemData3 = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
