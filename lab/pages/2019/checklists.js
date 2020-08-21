import React from 'react';
import Post from '../../layouts/post';
import P from '../../components/post/paragraph';
import { H2 } from '../../components/post/heading';
import Figure, { Image } from '../../components/post/figure';
import Quote from '../../components/post/quote';
import withViews from '../../lib/withViews';

export default withViews(({ postId, views }) => (
    <Post postId={postId} views={views}>
        <P>What follows is a very brief summary discussion on how I prepare for a marathon race.</P>

        <P>Note that this level of obsession is not required, however it does help free as much mental bandwidth as possible to focus most of it into running.</P>

        <H2 id="packing">Packing List</H2>
        <P>
            As I&apos;ve been traveling lately for racing. There are some items that are important to not forget. These items are as obvious as the running shoes.
            Other items such as safety pins are not as obvious.
        </P>

        <P>The objective here is being self-sufficient enough to line up at the start line without having to scramble to find an open shop with that specific product.</P>

        <H2 id="technology">Technology</H2>
        <P>I carry 3 electronic devices during any race. A GPS watch and a heart rate monitor to track my race and a cell phone for emergencies.</P>
        <P>I still use a heart rate monitor chest strap because I have not found wrist-based optical heart rate to be reliable yet.</P>
        <P>The cell phone also can do internet live tracking, so that is an added bonus.</P>

        <P>Unfortunately, these items have special cables or batteries and need to be topped off to avoid surprises.</P>

        <P>In addition each must be configured to a very specific profile to aid the run or remove any distractions. For example, on the watch, I have very specific fields on each screen.</P>
        <P>Since I try to pace even effort for every kilometer or mile (depending how the course is marked). My main screen focuses on heart rate and per-lap pace.</P>

        <H2 id="raceday">Race Day</H2>
        <P>Lastly, having an ordered list of steps to go through on race morning, i.e. a plan, minimizes the possibility of surprises.</P>

        <P>This list has been refined through many past mistakes. At this stage, it is sufficient enough to not leave much to blame for having a bad day.</P>

        <P>Ergo, a bad day means failure to train adequately.</P>

        <Figure
            desc={(<span>stuff</span>)}
        >
            <Image width={300} src="https://cldup.com/ePCBk5ZmYM.png" />
        </Figure>

        <Quote>Luck = Hard Work + Preparation + Statistical Variations</Quote>
    </Post>
));
