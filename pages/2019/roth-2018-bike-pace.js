import React from 'react';
import Head from 'next/head';
import Post from '../../layouts/post';
import Title from '../../components/post/title';
import Meta from '../../components/post/meta';
import P from '../../components/post/paragraph';
import { Ref, FootNotes, Note } from '../../components/post/footnotes';
import Figure, { Image } from '../../components/post/figure';
import withViews from '../../lib/withViews';

export default withViews(({ views }) => (
    <Post>
        <Head><title>Analyzing Challenge Roth 2018 Bike Pacing</title></Head>
        <Title>Analyzing Challenge Roth 2018 Bike Pacing</Title>
        <Meta date="March 18, 2019" views={views} />

        <P>For Challenge Roth 2018, I estimated my FTP to be 228. It took me 6:21:40 to complete the 180km using a NP of 140<Ref id="1" />. The IF thus was 0.614 and the TSS was around 240.</P>

        <P>Looking at the chart below<Ref id="2" /> for a 6:20:00ish time it has become clear that I left way too much time on the table. A conservative ride should have been closer to 5% NP higher.</P>

        <P>This would have netted a time of around 6:06:00 (according to Best Bike Split) at the TSS cost of 275 which would have put me in the good range to still have a good run time.</P>

        <P>We&apos;ll just have to manage the effort better next time and not hold back as much on the bike.</P>

        <Figure desc="Bike TSS Chart">
            <Image src="https://wpassets.trainingpeaks.com/wp-content/uploads/2017/01/howtocheatusingpowermeterinironman-2.png" width="85%" />
        </Figure>

        <FootNotes>
            <Note id="1">
                See <a href="https://www.strava.com/activities/2180900641" target="_blank" rel="noopener noreferrer">ride data</a> on Strava.
            </Note>
            <Note id="2">
                See Joe Friel&apos;s <em><a href="https://www.trainingpeaks.com/blog/how-to-cheat-by-using-a-power-meter-in-an-ironman" target="_blank" rel="noopener noreferrer">How to &quot;Cheat&quot; by Using a Power Meter in an Ironman</a></em>.
            </Note>
        </FootNotes>
    </Post>
));
