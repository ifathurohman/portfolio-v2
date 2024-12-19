import tagCanvas from 'tag-canvas';
import React, {useEffect} from 'react';
import github from '../../images/icons/icons8-github-50.png';
import bootstrap from '../../images/icons/icons8-bootstrap-96.png';
import css from '../../images/icons/icons8-css-100.png';
import docker from '../../images/icons/icons8-docker-100.png';
import express from '../../images/icons/icons8-express-js-100.png';
import firebase from '../../images/icons/icons8-firebase-96.png';
import html from '../../images/icons/icons8-html-100.png';
import javascript from '../../images/icons/icons8-javascript-100.png';
import mongodb from '../../images/icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png';
import mysql from '../../images/icons/icons8-mysql-100.png';
import nodejs from '../../images/icons/icons8-node-js-96.png';
import php from '../../images/icons/icons8-php-logo-100.png';
import react from '../../images/icons/icons8-react-96.png';
import restapi from '../../images/icons/icons8-rest-api-100.png';
import sqlserver from '../../images/icons/icons8-sql-server-96.png';
import tailwind from '../../images/icons/icons8-tailwind-css-96.png';

const TechStack = () => {
  const s = new Date().getTime() / 360;
  const o = {
    initial: [0, 0.1],
    textColour: '#08fdd8',
    shape: 'sphere',
    reverse: true,
    depth: 0.99,
    maxSpeed: 0.02,
    altImage: true,
    animTiming: 'Smooth',
    hideTags: true,
    outlineMethod: 'none',
    textHeight: 21,
    wheelZoom: false,
  };

  o.initial[0] = 0.2 * Math.cos(s);
  o.initial[1] = 0.2 * Math.sin(s);
  
  useEffect(() => {
    try {
      tagCanvas.Start('myCanvas', 'tags', o);
    } catch (e) {
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  });

  return (
    <>
      <div id="myCanvasContainer">
        <canvas width="500" height="500" id="myCanvas" style={{width: '100%'}}>
          <p>
            Anything in here will be replaced on browsers that do not support
            the canvas element
          </p>
        </canvas>
      </div>
      <div id="tags" style={{display: 'none'}}>
        <ul>
          <li>
            <a href="/">
              <img
                name="github"
                alt="github"
                width={50}
                height={50}
                src={github}
              />
              <h1>Github</h1>
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="javascript"
                alt="javascript"
                width={50}
                height={50}
                src={javascript}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="bootstrap"
                alt="bootstrap"
                width={50}
                height={50}
                src={bootstrap}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img name="css" alt="css" width={50} height={50} src={css} />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="react"
                alt="react"
                width={50}
                height={50}
                src={react}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img name="html" alt="html" width={50} height={50} src={html} />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="docker"
                alt="docker"
                width={50}
                height={50}
                src={docker}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="sqlserver"
                alt="sqlserver"
                width={50}
                height={50}
                src={sqlserver}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="restapi"
                alt="restapi"
                width={50}
                height={50}
                src={restapi}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="nodejs"
                alt="nodejs"
                width={50}
                height={50}
                src={nodejs}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="mongodb"
                alt="mongodb"
                width={50}
                height={50}
                src={mongodb}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="sqlserver"
                alt="sqlserver"
                width={50}
                height={50}
                src={sqlserver}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="mysql"
                alt="mysql"
                width={50}
                height={50}
                src={mysql}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                name="docker"
                alt="docker"
                width={50}
                height={50}
                src={docker}
              />
            </a>
          </li>
          <li>
            <a href="/">
              {' '}
              <img
                name="express"
                alt="express"
                width={50}
                height={50}
                src={express}
              />
            </a>
          </li>
          <li>
            <a href="/">
              {' '}
              <img
                name="firebase"
                alt="firebase"
                width={50}
                height={50}
                src={firebase}
              />
            </a>
          </li>
          <li>
            <a href="/">
              {' '}
              <img
                name="tailwind"
                alt="tailwind"
                width={50}
                height={50}
                src={tailwind}
              />
            </a>
          </li>
          <li>
            <a href="/">
              {' '}
              <img name="php" alt="php" width={50} height={50} src={php} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TechStack;
