import React from 'react';
import Head from 'next/head';
import Post from '../../layouts/post';
import Title from '../../components/post/title';
import Meta from '../../components/post/meta';
import P from '../../components/post/paragraph';
import { H2 } from '../../components/post/heading';
import Quote from '../../components/post/quote';
import withViews from '../../lib/withViews';

export default withViews(({ views }) => (
    <Post>
        <Head><title>How I Decide How Fast to Run a Marathon</title></Head>
        <Title>How I Decide How Fast to Run a Marathon</Title>
        <Meta date="March 19, 2019" views={views} />

        <Quote by="Anonymous">It&apos;s a marathon, not a sprint!</Quote>

        <P>
            Or so the saying goes.
            I don&apos;t know how everyone else interprets this. But here is how I do.
        </P>

        <P>
            I use a 10km time trial or race and then scale it.
            Why 10km? Because 10km is an aerobic distance.
            However, to run it well, one would need to run at the very edge of going anaerobic.
            The pace for a half marathon is too easy and the pace for 5km is too hard.
        </P>

        <P>Obviously, this prediction assumes that one has trained for the distance.</P>

        <H2 id="predictor">The Predictor Run</H2>
        <P>Last week I went out on a 400m track and tried to run 25 laps of it as evenly as possible and at a pace I thought I could sustain for about 46-48 minutes.</P>

        <P>
            If you look at the <a href="https://www.strava.com/activities/2212048458/laps" target="_blank" rel="noopener noreferrer">lap split times</a> for that run, all but the last one were around 4:30 per km.
            For perspective, the world record for 10,000 meters is just under 2:40 per km and the marathon one is slightly less than 2:53 per km.
            Yes, I&apos;m slow.
        </P>

        <P>Surprisingly, though, the total time for the run was slightly better than expected at 44:32.</P>

        <H2 id="estimate">The Estimate Calculation</H2>

        <P>To keep this simple (there are many ways to make it complicated), let&apos;s multiply the total 10km time by a factor of 4.6. The result of the calculation is 2:24:45 which is a 7:49 per mile pace or 4:51 per km.</P>

        <P>
            To be honest, this seems like a fantastic best-case scenario.
            And furthermore, it would take really long to recover if I attempted that pace and there is still more training and racing to do this year.
            So my plan is to run a slightly more conservative pace, likely for a time between 3:35:00 and 3:45:00.
        </P>

        <P>Nevertheless it bodes well as a good training base to run under 4 hours at Challenge Roth and under 3:19:59 at New York City.</P>

        <P>With that, we&apos;ll have to see how well I can execute the plan this weekend in Los Angeles.</P>
    </Post>
));
