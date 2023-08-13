<div align="center">
    <img src="https://raw.githubusercontent.com/vdutts7/dump/main/assets/botplot.png " alt="Logo" width="80" height="80">
    <h1 align="center">
        BotPlot
    </h1>
    <p align="center"> 
        <i><b>An NPC bot roaming a plot ⛰️🤖</b></i>
    </p>

[![Github][github]][github-url]

  <h6 align="center">
    <i> NOTE: Meant as a proof of concept and is a work in progress. Errors may occur.</i>
  </h6>
  </div>

## Table of Contents

  <ol>
    <a href="#about">📝 About</a><br/>
    <a href="#how-to-build">💻 How to Build</a><br/>
    <a href="#tools-used">🔧 Tools Used</a>
        <ul>
        </ul>
    <a href="#next-steps">🚀 Next Steps</a><br/>
    <a href="#contributions">👥 Contributions</a><br/>
    <a href="#contact">👤 Contact</a>
  </ol>

<br/>

## 📝About

A virtual environment roleplaying game where a user-created NPC (non-playable character) roams about to achieve a given objective:

- Similar to traditional video games-- but way more AI-heavy. User is in "copilot" mode.

LLMs have the power to behave as NPCs whch taken on states, personalities, character-like qualities, and most importantly-- develop heuristics to pursue (modeled by one or many heuristic functions often). <b>I use `gpt-3-turbo` to explore these capabilties.</b>

This is an <b>open-source project</b> I am building and adding to over time. Feedback and contributions are welcome, see <a href="#contributions">Contributions</a> .

### Game Mechanics

- `Agent` is the NPC exploring the world, currently a pixelated 2D plot of land
- `Impassable` tiles: cannot be passed
- `Plantable` (passable) tiles: a `Plant` layer with `Plantable` tiles and plants but not currently in use by `Agent`
- Commands for `Plantable` tiles:
  - Press `S` to `plant` 1u food
  - Press `D` to `harvest` 1u food

### `Agent` Details

- `gpt-3.5-turbo` via `OpenAI API`
- List of `Actions` it can perform (up, down, L, R)
- Copilot style: AI `Agent` by default, but user interjections take precedent
- Ability to evaluate `Surroundings`
- Actions fluctuate based on `Sleepiness` values (which it self-assigns)

### File Structure

- `Agent` contains all `Agent`-related code
- `ui-admin` contains all environemnt-related code
- Used `OpenAI API` for (1) decision-making, (2) interacting with frontend (via `wss`)
- `Tiled` is the map editor. See `ui-admin/src/assets`
- `Phaser` and `Grid Engine Plugin` used for rendering environment

<br/>

## 💻How to Build

Meant as a proof of concept and is a work in progress. Errors may occur.<br/>

Designed to run <b>locally</b>. Follow steps here to run:

1. Update the `agent/env.json` file with your `OPENAI_API_KEY`
2. I've only tested with `Node.js 16.19.0``
3. From the `gptrpg` folder, run `npm install` to install dependencies for everything
4. Run `npm start` in the main folder. This will start up the agent and front-end. The front-end will be at `http://localhost:3000`

<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/vdutts7/dump/main/assets/botplot.png " alt="Logo" width="600" height="600">
</div>


## 🚀Next Steps

- Heuristic goal-setting
- More agent actions (eat, harvest some shit, sing, vibe, etc.)
- More states of being (emotions)
- Web UI

## 👥Contributions

Contributions are welcome. Creativity is welcome. Please make a pull request at the project [repo](https://github.com/vdutts7/botplot/).

<br/>

## 🔧Tools Used

[![Phaser][phaser]][phaser-url]
[![GridEngine][gridengine]][gridengine-url]
[![Tiled][tiled]][tiled-url]
[![WebSocket][websocket]][websocket-url]
[![OpenAI][openai]][openai-url]
[![React][react]][react-url]

<br/>

## 👤Contact

[![Email][email]][email-url]
[![Twitter][twitter]][twitter-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[react]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB&color=black
[react-url]: https://react.dev/
[websocket]: https://img.shields.io/badge/WebSocket-0058A0?style=for-the-badge&logo=websocket&logoColor=499cc6&color=24272e
[websocket-url]: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
[tiled]: https://img.shields.io/badge/Tiled-0058A0?style=for-the-badge&logo=tiled&logoColor=499cc6&color=5a66cd
[tiled-url]: https://www.mapeditor.org/
[phaser]: https://img.shields.io/badge/Phaser.io-CEFF00?style=for-the-badge&logo=Phaser&logoColor=white&color=8e3e88
[phaser-url]: https://phaser.io/
[gridengine]: https://img.shields.io/badge/GridEngine-ffffff?style=for-the-badge&logo=gridengine&logoColor=white&color=539238
[gridengine-url]: https://annoraaq.github.io/grid-engine/
[openai]: https://img.shields.io/badge/OpenAI_GPT--3.5--turbo-000000?style=for-the-badge&logo=openai&logoColor=white&color=4aa481
[openai-url]: https://openai.com/
[github]: https://img.shields.io/badge/💻Github-000000?style=for-the-badge
[github-url]: https://github.com/vdutts7/botplot/
[email]: https://img.shields.io/badge/me@vdutts7.com-FFCA28?style=for-the-badge&logo=Gmail&logoColor=00bbff&color=black
[email-url]: #
[twitter]: https://img.shields.io/badge/Twitter-FFCA28?style=for-the-badge&logo=Twitter&logoColor=00bbff&color=black
[twitter-url]: https://twitter.com/vdutts7/
