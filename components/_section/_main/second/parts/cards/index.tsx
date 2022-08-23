import {Card, CardContent, Divider, Stack, Typography} from "@mui/material";
import React from "react";

const Cards = () => {

    const value = ["다양한 스타일의 눈썹","합리적인 가격","김포 북변동","리터치 시 50% 할인"]


    return (
        <Stack direction={"column"} spacing={2}>
            {value.map((text,key)=>{
                return(
                    <Card key={key}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14,fontFamily:"Elice Digital Baeum" }}>{text}</Typography>
                        </CardContent>
                    </Card>
                );
            })}
        </Stack>
    );
};
export default Cards;