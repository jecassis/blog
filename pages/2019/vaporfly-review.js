import React from 'react';
import Post from '../../layouts/post';
import P from '../../components/post/paragraph';
import Figure, { Image } from '../../components/post/figure';
import Grid, { Column } from '../../components/post/grid';
import withViews from '../../lib/withViews';

export default withViews(({ postId, views }) => (
    <Post postId={postId} views={views}>
        <P>
            The shoes I wore for the Los Angeles Marathon was the Nike Vaporfly 4% Flyknit in Deep Royal Blue/Red Orbit colorway.
            Much has been written about this shoe and the ZoomX foam and carbon plate. Let me add my voice to the noise.
        </P>

        <Figure desc={<span>The profile shot.</span>}>
            <Image src="https://s3-us-west-2.amazonaws.com/oops-blog/vaporfly-4-flyknit-running-shoe-v7G3FB_crop.png" />
        </Figure>

        <P>Here are some action shots:</P>
        <style jsx>
            {`
.zoom {
    width: 100%;
    height: auto;
    vertical-align: middle;
}
            `}
        </style>
        <Grid>
            <Column id="img1" width={99} height={175}>
                <img className="zoom" src="https://s3-us-west-2.amazonaws.com/oops-blog/3017_019782.JPG" alt="Mile 4" />
            </Column>
            <Column id="img2" width={90} height={149}>
                <img className="zoom" src="https://s3-us-west-2.amazonaws.com/oops-blog/3017_456791.JPG" alt="Spring" />
            </Column>
            <Column id="img3" width={97} height={160}>
                <img className="zoom" src="https://s3-us-west-2.amazonaws.com/oops-blog/3017_456792.JPG" alt="Pronation" />
            </Column>
            <Column id="img4" width={122} height={209}>
                <img className="zoom" src="https://s3-us-west-2.amazonaws.com/oops-blog/3017_698144.JPG" alt="Mile 24" />
            </Column>
        </Grid>
    </Post>
));
