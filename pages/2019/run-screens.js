import React from 'react';
import Post from '../../layouts/post';
import P from '../../components/post/paragraph';
import { H2, H3 } from '../../components/post/heading';
import NL, { LI as LIn } from '../../components/post/numbers-list';
import UL, { LI } from '../../components/post/bullets-list';
import HR from '../../components/post/hr';
// import Figure, { Image } from '../../components/post/figure';
// import Quote from '../../components/post/quote';
import withViews from '../../lib/withViews';

export default withViews(({ postId, views }) => (
    <Post postId={postId} views={views}>
        <P>My GPS watch is a Garmin Forerunner 935 in case you were wondering.</P>

        <P>But what is on my GPS watch when I race and how do I use it?</P>

        <P>Let me explain each screen and the fields for my &quot;Run Race&quot; profile.</P>

        <H2 id="screens">The Screens</H2>
        <H3 id="main">Main Screen</H3>
        <P>This screen is usually the only one I use during the race, but we have more just in case.</P>
        <NL>
            <LIn>Time: Total elapsed time because this is the variable we want to minimize :)</LIn>
            <LIn>Lap Pace: By pressing the lap button manually at every km or mile marker, this field shows the cumulative pace from that point. The idea is for this number to converge to the desired pace.</LIn>
            <LIn>Distance: Total distance covered because a marathon is a fixed distance. I always assume this number is about 5% in error.</LIn>
            <LIn>Heart Rate: Essentially this tends to correlate to the effort at a given pace. Often times there is a target for this.</LIn>
        </NL>
        <H3 id="lap">Lap Screen</H3>
        <P>This screen shows the current lap information. The way to think about this screen is a timer that is zeroed 42 or 26 times in a marathon which breaks the race down into manageable chunks.</P>
        <NL>
            <LIn>Lap Time: Total elapsed time since the last km or mile marker when I pressed the lap button.</LIn>
            <LIn>Lap Pace: Same as main screen.</LIn>
            <LIn>Lap Distance: Total distance covered because a marathon is a fixed distance. I always assume this number is about 5% in error.</LIn>
            <LIn>Heart Rate: Same as main screen.</LIn>
        </NL>
        <H3 id="summary">Summary Screen</H3>
        <P>This screen shows the summary information for the race in case I want to see how I&apos;ve been doing up to that point.</P>
        <NL>
            <LIn>Average Pace: Self-explanatory.</LIn>
            <LIn>Last Lap Time: Keeps the last split in case I missed it when I pressed the lap button.</LIn>
            <LIn>Average Cadence: Again self-explanatory.</LIn>
            <LIn>Average Heart Rate: Also self-explanatory.</LIn>
        </NL>
        <H3 id="misc">Miscellaneous Screen</H3>
        <P>This screen shows some miscellaneous information for the race in case I want to see how I&apos;ve been doing up to that point.</P>
        <NL>
            <LIn>Heading: It might be interesting but usually not.</LIn>
            <LIn>Temperature: If I ever look at this I become depressed because I&apos;m probably not feeling great.</LIn>
            <LIn>Power: I don&apos;t find it very reliable as in the bike, but I have a field for it so that it is recorded.</LIn>
            <LIn>Elevation: Also might be interesting but not terriblyuseful.</LIn>
        </NL>
        <H3 id="clock">Clock Screen</H3>
        <P>This screen shows the time. It is important to keep tabs on the start time.</P>
        <H3 id="other">Other Settings</H3>
        <P>These are settings that are specific to the &quot;Run Race&quot; profile itself.</P>
        <UL>
            <LI>HR Zone Gauge: Disabled</LI>
            <LI>Map: Off</LI>
            <LI>Virtual Partner: Off</LI>
            <LI>Running Dynamics: Enabled (Cadence, GCT, GCT Balance)</LI>
            <LI>Running Dynamics 2: Enabled (Vertical Ratio, Vertical Oscillation, Stride Length)</LI>
            <LI>Alerts: None</LI>
            <LI>Laps: Manual Only</LI>
            <LI>Metronome: Off</LI>
            <LI>Auto Pause: Off</LI>
            <LI>Auto Scroll: Off</LI>
            <LI>Segment Alerts: Disabled</LI>
            <LI>GPS: GPS<s>+GLONASS</s></LI>
            <LI>Power Save Timeout: Extended</LI>
        </UL>
        <H3 id="global">Global Settings</H3>
        <P>These are settings that apply to the entire unit.</P>
        <UL>
            <LI>Heart Rate Monitor:</LI>
            <NL>
                <LIn>Optical Heart Rate Status: Off</LIn>
                <LIn>Broadcast Heart Rate: Off</LIn>
            </NL>
            <LI>Sensors and Accessories</LI>
            <NL>
                <LIn>HRM-Run 1: Connected</LIn>
                <LIn>Unused Sensors and Accessories: Disable</LIn>
            </NL>
            <LI>Bluetooth</LI>
            <NL>
                <LIn>Bluetooth Status: On/Connected</LIn>
                <LIn>Smart Notifications Status: Off</LIn>
                <LIn>Connection Alert: On</LIn>
            </NL>
            <LI>Alarms: Disabled</LI>
            <LI>Do Not Disturb</LI>
            <NL>
                <LIn>Do Not Disturb Status: On</LIn>
                <LIn>Sleep Time: Off</LIn>
            </NL>
            <LI>Activity Tracking</LI>
            <NL>
                <LIn>Activity Tracking Status: Off</LIn>
                <LIn>Move Alert: Off</LIn>
            </NL>
            <LI>Language: English</LI>
            <LI>Clock</LI>
            <NL>
                <LIn>Watch Face: Digital</LIn>
                <LIn>Use Profile Color: On</LIn>
                <LIn>Background: Black</LIn>
                <LIn>Time Format: 12-Hour</LIn>
                <LIn>Set Automatically: On</LIn>
            </NL>
            <LI>Backlight</LI>
            <NL>
                <LIn>Keys and Alerts: Off</LIn>
                <LIn>Wrist Turn: Off</LIn>
                <LIn>Timeout: 8 Seconds</LIn>
            </NL>
            <LI>Sounds</LI>
            <NL>
                <LIn>Key Tones: Off</LIn>
                <LIn>Alert Tones: Off</LIn>
                <LIn>Vibration: Off</LIn>
            </NL>
            <LI>Units (for US-based races)</LI>
            <NL>
                <LIn>Distance: Miles</LIn>
                <LIn>Pace/Speed: Miles</LIn>
                <LIn>Elevation: Feet</LIn>
                <LIn>Weight: Pounds</LIn>
                <LIn>Height: Feet</LIn>
                <LIn>Temperature: Fahrenheit</LIn>
            </NL>
            <LI>Format</LI>
            <NL>
                <LIn>Pace/Speed Preference &gt; Running: Show Pace</LIn>
                <LIn>Start of Week: Monday</LIn>
            </NL>
            <LI>Data Recording: Every Second</LI>
        </UL>

        <HR />

        <P>I hope that was illuminating.</P>
    </Post>
));
