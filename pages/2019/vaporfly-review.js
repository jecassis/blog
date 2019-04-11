import React from 'react';
import styled from 'styled-components';
import Post from '../../layouts/post';
import { H2, H3 } from '../../components/post/heading';
import P from '../../components/post/paragraph';
import UL, { LI } from '../../components/post/bullets-list';
import Figure, { Image } from '../../components/post/figure';
import Grid, { Column } from '../../components/post/grid';
import { Ref, FootNotes, Note } from '../../components/post/footnotes';
import withViews from '../../lib/withViews';

const Img = styled.img`
    width: 100%;
    height: auto;
    vertical-align: middle;
`;

export default withViews(({ postId, views }) => (
    <Post postId={postId} views={views}>
        <P>
            The shoes I wore for the Los Angeles Marathon was the Nike Vaporfly 4% Flyknit in Deep Royal Blue/Red Orbit colorway.
            Much has been written about this shoe and the ZoomX foam and carbon fiber plate. Let me add my voice to the noise.
        </P>

        <Figure desc={<span>The profile shot.</span>}>
            <Image src="https://s3-us-west-2.amazonaws.com/oops-blog/vaporfly-4-flyknit-running-shoe-v7G3FB_crop.png" />
        </Figure>

        <H2 id="overall">Overall</H2>
        <P>
            The shoes are light. Surprisingly light. My pair, size 8.5 (only comes in men&apos;s sizes) weighs in at 182.1g for the left and 185.9g for the right adding up to 368.0g for the pair.
            For comparison, the shoes I wore for my previous marathon were 627.5g with the orthotics (537.1g with the regular sockliner).
            The upper is breathable and I had no feeling of my feet overheating or sweatiness.
            The shoe&apos;s medial foam, being designed for mostly neutral runners, collapses substantially providing very little stability.
            Combined with the flyknit upper having no heel counter and this is a very unstable shoe for doing anything but going straight.
        </P>

        <H2 id="details">Details</H2>
        <H3>Rearfoot</H3>
        <P>
            On the flats and uphills, the heel felt locked down. However, when cornering aggressively or going downhill, the heel was slippling fore and aft as well as sideways.
        </P>

        <H3>Collar</H3>
        <P>
            The shoes are not quick to put on, but the collar was appropriately high and caused no irritation of the ankle (wearing socks) or the Achilles.
        </P>

        <H3>Midfoot</H3>
        <P>
            The laces did not cause irritation but didn&apos;t provide enough lockdown during cornering and downhill running.
            Also not great on more than slightly cambered roads; the upper is just too flexible (see the third picture below).
        </P>

        <H3>Forefoot</H3>
        <P>
            The forefoot feels snug, especially when putting them on at first. Took a couple of tries lacing them before a good balance between comfort and tightness was achieved.
        </P>

        <H3>Toebox</H3>
        <P>
            The flyknit makes it really easy to move the toes. The box seemed fine in the width department, until I took them off and found blisters on the medial side of my index toes and the medial ball of my foot.
            My thinking is that the shoe allows my foot to roll inward just a bit too much.
        </P>

        <H3>Midsole</H3>
        <P>
            Feels responsive, but you need to be running fast-ish to feel the spring. Is definitely cushioned and stable on straights.
            There appeared to be no obvious pressure points when running, but my foot did begin to feel numb for a few minutes.
            Transition feels smooth from heel strike to toe-off; the carbon fiber plate and the ZoomX foam<Ref id="1" /> work well together.
        </P>

        <H3>Outsole</H3>
        <P>
            Traction felt fine and the outsole didn&apos;t show too much wear over the marathon distance. However, the shoe does tranfer pavement irregularities a bit.
        </P>

        <H2 id="qa">Build Quality and Feel</H2>
        <P>
            The sockliner is taped or glued onto the shoe. When I first put them on, I could hear the glue between sockliner and midsole sticking and unsticking. This eventually went away but not a good first impression for a premium shoe.
        </P>

        <P>
            The heel padding color transferred Royal Blue into my socks after the marathon. Again not screaming &quot;premium&quot;.
            Furthermore, the heel counter padding rubs the rear of the heel when walking. For some reason, running is fine.
        </P>

        <P>
            The flyknit upper feels extremely tight when first trying them on.
        </P>

        <H2 id="pics">Action Shots</H2>
        <Grid>
            <Column id="img1" width={99} height={175}>
                <Img src="https://s3-us-west-2.amazonaws.com/oops-blog/3017_019782.JPG" alt="Mile 4" />
            </Column>
            <Column id="img2" width={90} height={149}>
                <Img src="https://s3-us-west-2.amazonaws.com/oops-blog/3017_456791.JPG" alt="Spring" />
            </Column>
            <Column id="img3" width={97} height={160}>
                <Img src="https://s3-us-west-2.amazonaws.com/oops-blog/3017_456792.JPG" alt="Pronation" />
            </Column>
            <Column id="img4" width={122} height={209}>
                <Img src="https://s3-us-west-2.amazonaws.com/oops-blog/3017_698144.JPG" alt="Mile 24" />
            </Column>
        </Grid>

        <H2 id="conclusions">Conclusions</H2>
        <P>
            The most important questions (and answers) I wanted to find out in my experiment are:
        </P>
        <UL>
            <LI>Do they feel good? Not the biggest fan of the flyknit upper but it didn&apos;t hinder my running except for the extreme foot slippage on the downhills.</LI>
            <LI>Did they make me run faster? I didn&apos;t go slow, so I guess that&apos;s good, but far from PR pace. So the verdict is still out on whether I&apos;m getting my 4% energy efficiency.</LI>
            <LI>Would I wear them again? Yes, for races that fit a specific profile, i.e. <em>flat</em> or uphill, good tarmac, and fast.</LI>
            <LI>Do you like their look? Fuck yeah, the Deep Royal Blue/Red Orbit color combination looks awesome!</LI>
            <LI>Are they worth $250? Fuck no!!!!!</LI>
        </UL>

        <FootNotes>
            <Note id="1">
                ZoomX foam is Nike&apos;s special flavor of Arkema&apos;s Pebax which is a family of thermoplastic elastomers (TPE).
                The material is designed by combining its two molecular components, polyamide blocks for toughness and polyether for flexibility.
            </Note>
        </FootNotes>
    </Post>
));
