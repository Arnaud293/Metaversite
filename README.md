<h1> Metaversite ? </h1>

<h4> Metaversite is a landing page based on a figma model, and inspired by the universe of the metaverse. </h4>

<h3>Stack and tools</h3>
<ul>
  <li>NextJs</li>
  <li>TailwindCss</li>
  <li>Framer motion</li>
</ul>
<h4>Deployment</h4>
<p><em>The project has been deployed on Netlify, you can view the demo at : <a href="https://precious-malabi-33d670.netlify.app">Metaversite</a></em></p>


![metaversus](https://user-images.githubusercontent.com/101059956/217273043-905ef7ba-8e3a-4735-b0a3-7f997595be1a.png)


<h2>How it works ?</h2>
<p>The site integrates a figma model with a powerful UI powered by NextJs, with dynamic animations created via framer motion. </p>

<h3>About Pages</h3>
<table>
    <thead>
        <tr>
            <th colspan="2">Pages</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>index.jsx</td>
            <td>This single page offers a rendering of all the sections. </td>
        </tr>
    </tbody>
</table>

<h3>About Sections</h3>

<table>
    <thead>
        <tr>
            <th colspan="2">Sections</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>About</td>
            <td>This section contains only text and some animations. The text writing animation is powered through a dedicated 'TypingText' component.</td>
        </tr>
         <tr>
            <td>Explore</td>
            <td>This section offers the possibility to choose a metaverse world to explore(As you can see in the picture above). It performs its rendering using the following pure components: TypingText, ExploreCard, TitleText</td>
        </tr>
         <tr>
            <td>Feedback</td>
            <td>This section dispenses with components. It offers an animated textual content about Samantha's metaverse experience.</td>
        </tr>
         <tr>
            <td>GetStarted</td>
            <td>This section presents the different steps to follow to get started. It performs its rendering using the following pure components: StartSteps, TypingText, TitleText (variant component of TypingText for titles). It uses a lot of animations from framer in order to make the rotation effect when the images (planets) appear on the scroll.</td>
        </tr>
        <tr>
            <td>Hero</td>
            <td>This section offers the rendering of the header with the appearance animation as well as the custom text "Metaverse Madness".</td>
        </tr>
        <tr>
            <td>Insights</td>
            <td>This section gives an overview of what awaits you in the metaverse. It performs its rendering using the following pure components: InsightCard, TypingText, TitleText.</td>
        </tr>
        <tr>
            <td>WhatsNews</td>
            <td>Similar to GetStarted but it deals with the latest updates on the metaverse. It performs its rendering using the following pure components: NewFeatures, TypingText, TitleText.</td>
        </tr>
        <tr>
            <td>World</td>
            <td>This section displays the world map to provide an overview of the possibilities for connecting and sharing with the world in the metaverse. It performs its rendering using the following pure components: TypingText, TitleText.</td>
        </tr>
    </tbody>
</table>

<h3>About Components</h3>

<table>
    <thead>
        <tr>
            <th colspan="2">Components</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CustomTexts</td>
            <td>This component works in conjunction with framer motion and contains the logic for TypingText and TitleText as two separate functional components.</td>
        </tr>
         <tr>
            <td>ExploreCards</td>
            <td>This component renders the various cards in the Explore section.</td>
        </tr>
         <tr>
            <td>Footer</td>
            <td>This component renders the footer partly hardcoded with some animations. The object array containing the social media links is mapped from the consants folder.</td>
        </tr>
         <tr>
            <td>InsightCard</td>
            <td>This component renders the different cards in the Insight section</td>
        </tr>
        <tr>
            <td>NavBar</td>
            <td>This component renders the navBar using framer motion to animate it. It is not functional, it contains a delay of appearance and a gradient in background.</td>
        </tr>
        <tr>
            <td>NewFeatures</td>
            <td>This component renders the different elements of the WhatsNews section.</td>
        </tr>
        <tr>
            <td>StartSteps</td>
            <td>This component renders the different steps mapped from the GetStarted section.</td>
          </tr>
    </tbody>
</table>

<h3>Best Pratices</h3>

  ✅ The components are as pure as possible. <br/>
  ✅ Components are reusable as much as possible.<br/>
  ✅ The components, constants, utils, sections are gathered and exported from a dedicated index for each, in order to guarantee the cleanest and maintainable possible code.<br/>

<h3>Known issues</h3>
  ❌ No issues known to date.

<h3>List of possible improvements</h3>
<ul>
  <li>⚙️ Add a lazy loader to limit unnecessary queries. </li>
  <li>⚙️ Modify components to make them more reusable (example: for the row). </li>
  <li>⚙️ Use clearer naming for component endings with .jsx </li>
  <li>⚙️ Create a specific folder for every constants.</li>
  <li>⚙️ Create more dynamic rendering, some hard coded data could be mapped.</li>
</ul>
<h3>Specificity of folder structures</h3>

<table>
    <tbody>
        <tr>
            <td>/Sections/index.js</td>
            <td>Contain every requests excepted specific request for details mades with an id.</td>
        </tr>
         <tr>
            <td>/Components/index.js</td>
            <td>Contains all styling logic in scss, compiled to css in an index</td>
        </tr>
         <tr>
            <td>/constants/index.js</td>
            <td>Contains the minimum in assets, so everything that does not come from the API</td>
        </tr>
        <tr>
            <td>/utils/motion.js</td>
            <td>Contains the minimum in assets, so everything that does not come from the API</td>
        </tr>
        <tr>
            <td>/public</td>
            <td>Contains the minimum in assets, so everything that does not come from the API</td>
        </tr>
        <tr>
            <td>/styles</td>
            <td>Contains the minimum in assets, so everything that does not come from the API</td>
        </tr>
    </tbody>
</table>
