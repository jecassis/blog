import React from 'react';
import Head from 'next/head';
import Post from '../../layouts/post';
import Title from '../../components/post/title';
import Meta from '../../components/post/meta';
import P from '../../components/post/paragraph';
import { H2 } from '../../components/post/heading';
import withViews from '../../lib/withViews';

export default withViews(({ views }) => (
    <Post>
        <Head><title>Los Angeles Marathon Race Report</title></Head>
        <Title>Los Angeles Marathon Race Report</Title>
        <Meta date="March 26, 2019" views={views} />

        <P>
            The LA run from Dodger Stadium to the Pier in Santa Monica is in the bag.
            The run went well and ran light and easy for the first 20 miles or 32 kilometers.
        </P>

        <P>
            My finish time was 3:37:05. I estimate my first half marathon split was around 1:47:13 and my second half 1:49:52.
            More importantly my 5 kilometer splits were extremely even for the first 30km.
            Here are the official splits:
        </P>

        <style jsx>
            {`
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #ddd;
}
            `}
        </style>
        <table>
            <tr>
                <th>Distance</th>
                <th>Time</th>
                <th>Avg. Pace</th>
                <th>Split Time</th>
                <th>Split Pace (km)</th>
                <th>Split Pace (mi)</th>
            </tr>
            <tr>
                <td>5km</td>
                <td>0:25:34</td>
                <td>8:13/mi</td>
                <td>0:25:34</td>
                <td>05:07/km</td>
                <td>08:14/mi</td>
            </tr>
            <tr>
                <td>10km</td>
                <td>0:51:03</td>
                <td>8:13/mi</td>
                <td>0:25:29</td>
                <td>05:06/km</td>
                <td>08:12/mi</td>
            </tr>
            <tr>
                <td>15km</td>
                <td>1:16:20</td>
                <td>8:11/mi</td>
                <td>0:25:17</td>
                <td>05:03/km</td>
                <td>08:08/mi</td>
            </tr>
            <tr>
                <td>20km</td>
                <td>1:41:39</td>
                <td>8:11/mi</td>
                <td>0:25:19</td>
                <td>05:04/km</td>
                <td>08:09/mi</td>
            </tr>
            <tr>
                <td>25km</td>
                <td>2:06:52</td>
                <td>8:10/mi</td>
                <td>0:25:13</td>
                <td>05:03/km</td>
                <td>08:07/mi</td>
            </tr>
            <tr>
                <td>30km</td>
                <td>2:32:41</td>
                <td>8:11/mi</td>
                <td>0:25:49</td>
                <td>05:10/km</td>
                <td>08:18/mi</td>
            </tr>
            <tr>
                <td>35km</td>
                <td>2:59:31</td>
                <td>8:15/mi</td>
                <td>0:26:50</td>
                <td>05:22/km</td>
                <td>08:38/mi</td>
            </tr>
            <tr>
                <td>40km</td>
                <td>3:26:42</td>
                <td>8:19/mi</td>
                <td>0:27:11</td>
                <td>05:26/km</td>
                <td>08:45/mi</td>
            </tr>
            <tr>
                <td>42.195km</td>
                <td>3:37:05</td>
                <td>8:17/mi</td>
                <td>0:10:23</td>
                <td>04:44/km</td>
                <td>07:37/mi</td>
            </tr>
        </table>

        <H2 id="pre-race">Pre-Race</H2>
        <P>
            I arrived at Dodger Stadium around 5:40AM all dressed up and ready to run.
            After security, immediately found the shortest porta potty line and peed.
            After that, walked towards the gear check and found another porta potty line and peed again.
            Then got into the gear check line and dropped off my bag with a pullover and a dry set of clothes.
            From there I tied my shoes one final time, slurped a Clif Shot Gel, and lined up at the back of the Open Start Corral.
            The Open Corral was a shit show. No order or self-seeding.
            Exarcebating the problems is thatI had no LTE to start my live tracking app.
            Most likely because the cell towers were overwhelmed.
            So, start gun went off and I just let people pass for over 12 or 13 minutes, until I got it working.
            Then, I followed the continuously moving ocean of people to the start line almost 16 minutes after the gun.
        </P>

        <H2 id="race">Race</H2>
        <P>
            The first mile was slow, simply due to the sheer amount of people. Second mile went much faster because it was downhill.
            However, throughout the race, almost every 90 degree turn was walking pace and often suddenly stopping.
            And in this marathon, the first 6 or so miles through downtown meant that it would be slow.
            In any case, tried to run extremely comfortably, not breathing heavily and moving forward without swerving too far from the best racing line.
            I kept passing people the whole way, that was a nice feeling, though some people got annoyed when I passed close or in between.
            Screw them, not a time to socialize.
            When I get passed at bigger marathons, it means I better move off the racing line.
        </P>

        <P>
            Crowd support was virtually non-existent from the start until about 25km into the race.
            Only scattered pockets of people here and there. Not that I care, just calling out differences between marathons.
        </P>

        <P>
            I tried to keep running a comfortable pace and WAY below my target marathon heart rate up through Downtown, Hollywood Blvd., Sunset Blvd.,
            Rodeo Dr., and Santa Monica Blvd. Taking in the sights and mentally preparing for the time when it would get much harder.
            It got much harder to maintain the pace as I was heading for the 35km timing mat and opted to not increase my effort due to the Sun coming out in force.
            So I went slightly slower, running within myself in those slight, but constant uphill sections on San Vicente Blvd. up to mile 24.
        </P>

        <P>
            The quads were starting to ache a bit but once I passed the 40km timing mat, knowing that there&apos;s only 10 minutes left to run, I began accelerating.
            The final turn into Ocean Dr. couldn&apos;t have come soon enough and it was a long, long, long straight and flat run to the finish.
        </P>

        <H2 id="post-race">Post-Race</H2>
        <P>
            Felt good about how I executed my race, got some water and food, a medal, took some pictures, and went out to get a shower.
            Battle scars came in the form of some sore quads and hamstrings, small blisters on my index toes, and weirdly tense trapezius muscles.
            Overall, not too bad.
        </P>

        <P>
            I broke an important rule of marathoning, I wore brand new shoes on race day. The shoe review is upcoming.
        </P>

        <P>
            In conclusion, it looks like I&apos;ve built a good base for Roth.
            Now gotta keep training to run this fast after 8 hours of swimming and biking.
        </P>
    </Post>
));
