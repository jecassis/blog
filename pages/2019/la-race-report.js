import React from 'react';
import Link from 'next/link';
import Post from '../../layouts/post';
import P from '../../components/post/paragraph';
import { H2 } from '../../components/post/heading';
import Figure from '../../components/post/figure';
import TABLE, { TR, TH, TD } from '../../components/post/table';
import withViews from '../../lib/withViews';

export default withViews(({ postId, views }) => (
    <Post postId={postId} views={views}>
        <P>
            The LA run from Dodger Stadium to the Pier in Santa Monica is in the bag.
            The run went well and ran light and easy for the first 20 miles or 32 kilometers.
        </P>

        <P>
            My finish time was 3:37:05. I estimate my first half marathon split was around 1:47:13 and my second half 1:49:52.
            More importantly my 5 kilometer splits were extremely even for the first 30km.
            Here are the official splits:
        </P>

        <TABLE>
            <TR>
                <TH>Distance</TH>
                <TH>Time</TH>
                <TH>Avg. Pace</TH>
                <TH>Split Time</TH>
                <TH>Split Pace (km)</TH>
                <TH>Split Pace (mi)</TH>
            </TR>
            <TR>
                <TD>5km</TD>
                <TD>0:25:34</TD>
                <TD>8:13/mi</TD>
                <TD>0:25:34</TD>
                <TD>05:07/km</TD>
                <TD>08:14/mi</TD>
            </TR>
            <TR>
                <TD>10km</TD>
                <TD>0:51:03</TD>
                <TD>8:13/mi</TD>
                <TD>0:25:29</TD>
                <TD>05:06/km</TD>
                <TD>08:12/mi</TD>
            </TR>
            <TR>
                <TD>15km</TD>
                <TD>1:16:20</TD>
                <TD>8:11/mi</TD>
                <TD>0:25:17</TD>
                <TD>05:03/km</TD>
                <TD>08:08/mi</TD>
            </TR>
            <TR>
                <TD>20km</TD>
                <TD>1:41:39</TD>
                <TD>8:11/mi</TD>
                <TD>0:25:19</TD>
                <TD>05:04/km</TD>
                <TD>08:09/mi</TD>
            </TR>
            <TR>
                <TD>25km</TD>
                <TD>2:06:52</TD>
                <TD>8:10/mi</TD>
                <TD>0:25:13</TD>
                <TD>05:03/km</TD>
                <TD>08:07/mi</TD>
            </TR>
            <TR>
                <TD>30km</TD>
                <TD>2:32:41</TD>
                <TD>8:11/mi</TD>
                <TD>0:25:49</TD>
                <TD>05:10/km</TD>
                <TD>08:18/mi</TD>
            </TR>
            <TR>
                <TD>35km</TD>
                <TD>2:59:31</TD>
                <TD>8:15/mi</TD>
                <TD>0:26:50</TD>
                <TD>05:22/km</TD>
                <TD>08:38/mi</TD>
            </TR>
            <TR>
                <TD>40km</TD>
                <TD>3:26:42</TD>
                <TD>8:19/mi</TD>
                <TD>0:27:11</TD>
                <TD>05:26/km</TD>
                <TD>08:45/mi</TD>
            </TR>
            <TR>
                <TD>42.195km</TD>
                <TD>3:37:05</TD>
                <TD>8:17/mi</TD>
                <TD>0:10:23</TD>
                <TD>04:44/km</TD>
                <TD>07:37/mi</TD>
            </TR>
        </TABLE>

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

        <Figure desc={<span>Just past half way.</span>}>
            <img height="400" src="https://s3-us-west-2.amazonaws.com/oops-blog/20190324_090151_crop.jpg" alt="Mile 14" />
        </Figure>

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
            I broke an important rule of marathoning, I wore brand new shoes on race day. The <Link prefetch href="/2019/vaporfly-review"><a>shoe review</a></Link>.
        </P>

        <Figure desc={<span>Looking for the team.</span>}>
            <img height="400" src="https://s3-us-west-2.amazonaws.com/oops-blog/20190324_105908_crop.jpg" alt="After Race" />
        </Figure>

        <P>
            In conclusion, it looks like I&apos;ve built a good base for Roth.
            Now gotta keep training to run this fast after 8 hours of swimming and biking.
        </P>
    </Post>
));
