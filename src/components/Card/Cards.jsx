import React from 'react'
import { Card, Button,Row, Col, Container } from "react-bootstrap"
import "./Card.css"

export default function Cards(props) {




    return (
        <>
                <Row>
                    {
                        [...Array(parseInt(props.num)).keys()].map((data, index) =>
                            <Col xs={parseInt(props.xs)} md={parseInt(props.md)} lg={parseInt(props.lg)}>
                                <div style={{ marginTop: "20px" }}>
                                    <Card style={{ width: props.width+'rem' }}>
                                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/1024px-Andromeda_Galaxy_560mm_FL.jpg" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example .
                                            </Card.Text>
                                            <Button variant="outline-warning">Details</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        )
                    }
                </Row>
        </>
    )
}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function Cards() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/1024px-Andromeda_Galaxy_560mm_FL.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }