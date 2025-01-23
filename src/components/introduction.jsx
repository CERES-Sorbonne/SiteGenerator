import * as React from 'react'

export const Introduction = () => { return (
    <div className="landing-block text">
        <h2>Template de site académique de la Fac de Lettres</h2>
        <p>
            Ce site est un modèle pour les sites de laboratoire de <a href="https://lettres.sorbonne-universite.fr/">Faculté des Lettres de Sorbonne Université</a>.
                Il a pour vocation d'être un exemple modifiable afin de mettre en place aisément des sites web permettant de publier billets de blogs et mettre en avant des événements liés à l'activité d'un laboratoire.
        </p>
        <p>
            Fonctionnalités principales
            <ul>
                <li> Publier du contenu à partir de simples fichiers markdown </li>
                <li> Mise en avant d'événements </li>
                <li> Gestion facilitée de membres </li>
            </ul>
        </p>
        <p>
            Ce template a été créé par les ingénieurs de <a href="ceres.sorbonne-universite.fr">l'unité de service du CERES</a>.
        </p>
    </div>
)}

export const Footer = () => (
    <footer id="footer">
        <div className="footer-block">
            <p>CERES — Centre d'expérimentation en méthodes numériques pour les recherches en sciences humaines et
                sociales</p>
            <p>Faculté des Lettres de Sorbonne Université</p>
            <a href='https://lettres.sorbonne-universite.fr/'>
                <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.93 198.34">
                    <g><path fill="currentColor" d="M5.81,161.17c0.56,0.52,0.97,0.89,1.36,1.27c13.68,13.21,29.9,19.86,49.03,18.89c5.22-0.26,10.31-1.23,15.17-3.24c11.09-4.61,17-14.17,16.68-26.18c-0.26-9.72-4.6-16.81-12.73-21.81c-6.39-3.94-13.32-6.57-20.52-8.53c-11.65-3.17-22.91-7.26-32.99-14.08c-8.61-5.82-15.55-13.08-19.37-22.95c-1.71-4.43-2.56-9.02-2.44-13.78c0.02-0.66,0.11-1.32,0.21-2.45c0.63,1.34,1.04,2.28,1.51,3.18c2.77,5.35,6.96,9.41,11.76,12.89c8.19,5.93,17.31,10.07,26.89,13.05c8.95,2.78,18.09,4.97,27.14,7.44c10.03,2.73,19.65,6.44,28.36,12.2c8.34,5.51,15.12,12.41,18.73,21.95c7.41,19.61-0.77,40.7-19.75,51.01c-8.54,4.64-17.76,6.9-27.36,7.85c-14.44,1.44-28.34-0.45-41.44-6.92c-9.17-4.52-17.11-10.52-22.86-19.16c-1.07-1.61-1.39-2.94-0.3-4.69C4,165.33,4.77,163.33,5.81,161.17z"></path><path fill="currentColor" d="M118.3,130c-0.27-0.32-0.41-0.42-0.47-0.55c-3.4-8.27-9.36-14.35-16.64-19.25c-9.78-6.58-20.68-10.52-31.99-13.44c-8.6-2.22-17.29-4.08-25.85-6.46c-7.89-2.2-15.34-5.54-22.08-10.31C11.41,73,5.22,63.78,4.26,51.49C3.12,36.73,8.46,24.52,19.32,14.73c9.96-8.97,21.9-13.4,35.15-14.54c1.34-0.12,2.68-0.13,4.02-0.19c0.1,0,0.21,0.06,0.59,0.17c-0.24,2.47-0.46,5-0.79,7.51c-0.04,0.33-0.63,0.69-1.03,0.85c-3.38,1.29-5.14,3.76-5.18,7.43c-0.02,1.72,0,3.44,0,5.27c-0.68,0.04-1.18,0.14-1.66,0.09c-1.59-0.16-2.76,0.01-2.54,2.12c0.04,0.36-0.79,0.95-1.33,1.2c-7.11,3.38-12.42,8.49-15.3,15.91c-2.16,5.55-2.27,11.25-0.72,16.96c1.27,4.7,4.26,8.16,8.28,10.8c5.11,3.35,10.81,5.34,16.63,6.99c6.34,1.8,12.78,3.23,19.1,5.1c10.3,3.04,19.81,7.67,27.78,15.03c9.71,8.96,15.27,19.96,15.99,33.26C118.32,129.05,118.3,129.41,118.3,130z"></path><path fill="currentColor" d="M114.06,61.85c-8.05,0-16.02,0-24.26,0c0-0.84,0.04-1.66-0.01-2.47c-0.25-4.56,0.06-9.25-0.91-13.66c-2.01-9.16-7.67-15.87-15.85-20.4c-0.94-0.52-1.55-1.02-1.34-2.16c0.28-1.52-0.43-2.02-1.87-1.84c-0.64,0.08-1.31,0.01-2.17,0.01c0-1.8,0.02-3.41,0-5.01c-0.07-3.7-1.58-6.44-5.21-7.79c-0.42-0.16-0.92-0.69-0.98-1.11c-0.32-2.38-0.51-4.77-0.77-7.38c8.64,0.05,16.82,1.68,24.58,5.26c10.2,4.7,17.95,11.99,23.1,22.01C113.97,38.18,114.65,49.85,114.06,61.85z"></path><path fill="currentColor" d="M373.47,51.89c2.2,0,4.31-0.03,6.42,0.03c0.36,0.01,0.83,0.35,1.04,0.67c5.41,7.94,10.79,15.9,16.16,23.87c0.67,1,1.18,2.11,1.98,3.56c0-9.63,0-18.78,0-28.04c2.27,0,4.48,0,6.81,0c0,12.72,0,25.37,0,38.29c-2.21,0-4.36,0.04-6.51-0.04c-0.38-0.02-0.84-0.51-1.09-0.89c-5.88-8.83-11.73-17.67-17.6-26.51c-0.06-0.09-0.16-0.14-0.4-0.36c-0.03,0.46-0.07,0.79-0.07,1.13c0.07,8.44,0.13,16.87,0.22,25.31c0.01,0.96-0.25,1.44-1.32,1.4c-1.83-0.07-3.67-0.02-5.62-0.02C373.47,77.48,373.47,64.82,373.47,51.89z"></path><path fill="currentColor" d="M446.55,79.74c-0.09-1.96-0.22-3.55-0.22-5.14c-0.02-6.99,0.02-13.97-0.04-20.96c-0.01-1.39,0.42-1.88,1.82-1.79c1.66,0.11,3.32,0.03,5.12,0.03c0.04,0.77,0.1,1.37,0.1,1.97c0.01,11.51-0.03,23.03,0.04,34.54c0.01,1.59-0.55,1.78-1.99,1.97c-3.78,0.51-6.06-0.91-8.06-4.18c-3.64-5.95-7.84-11.56-11.74-17.35c-1.36-2.02-2.54-4.16-3.9-6.42c-0.07,0.34-0.15,0.53-0.15,0.72c0.07,8.44,0.12,16.87,0.25,25.31c0.02,1.48-0.42,1.98-1.9,1.87c-1.65-0.12-3.32-0.03-5.08-0.03c0-12.87,0-25.52,0-38.4c2.22,0,4.38-0.05,6.53,0.05c0.42,0.02,0.92,0.56,1.2,0.99c5.82,8.74,11.62,17.49,17.42,26.24C446,79.25,446.1,79.32,446.55,79.74z"></path><path fill="currentColor" d="M221.33,135.58c0-4.74,0-9.3,0-13.87c0-4.52,0-9.04,0-13.71c2.33,0,4.53,0,6.85,0c0,12.61,0,25.21,0,38.09c-2.21,0-4.41,0.03-6.62-0.03c-0.3-0.01-0.66-0.39-0.86-0.69c-5.27-7.7-10.53-15.41-15.75-23.14c-0.79-1.17-1.4-2.47-2.47-3.6c0.09,1.24,0.25,2.49,0.26,3.73c0.04,7.49,0.02,14.98,0.07,22.47c0.01,1.07-0.43,1.35-1.4,1.32c-1.4-0.04-2.8-0.07-4.19,0.01c-1.2,0.06-1.53-0.47-1.53-1.59c0.02-11.74,0.03-23.48,0-35.22c0-1.18,0.47-1.38,1.57-1.54c4.02-0.58,6.6,0.77,8.76,4.44c3.48,5.91,7.68,11.39,11.52,17.09C218.87,131.32,220.02,133.41,221.33,135.58z"></path><path fill="currentColor" d="M360.61,70.97c-0.05,11.32-9.03,20-20.65,19.96c-11.7-0.03-20.65-8.8-20.62-20.2c0.03-11.1,9.09-19.57,20.86-19.5C351.86,51.31,360.66,59.82,360.61,70.97z M353.32,71.05c0.1-7.62-5.59-13.52-13.13-13.61c-7.55-0.09-13.49,5.71-13.56,13.22c-0.07,7.79,5.72,13.97,13.17,14.07C347.32,84.83,353.22,78.86,353.32,71.05z"></path><path fill="currentColor" d="M187.36,70.79c0.03-11.16,9.02-19.61,20.78-19.55c11.65,0.06,20.52,8.57,20.5,19.67c-0.02,11.36-9.11,20.11-20.79,20.02C196.21,90.84,187.33,82.12,187.36,70.79z M194.68,70.82c0,7.83,5.8,13.9,13.29,13.91c7.48,0.01,13.37-6.08,13.4-13.85c0.02-7.55-5.81-13.44-13.34-13.45C200.46,57.43,194.68,63.23,194.68,70.82z"></path><path fill="currentColor" d="M303.71,70.26c5.21,2.72,7.27,7.43,5.29,12.75c-1.66,4.45-5.36,6.21-9.7,6.96c-1.15,0.2-2.33,0.29-3.5,0.3c-4.69,0.03-9.37,0.01-14.21,0.01c0-12.81,0-25.5,0-38.41c1.45,0,2.88-0.03,4.32,0c4.41,0.09,8.86-0.14,13.21,0.4c6.9,0.85,10.65,6.83,8.21,12.83C306.57,66.98,304.98,68.51,303.71,70.26z M288.48,84.37c3.24,0,6.2,0.18,9.13-0.05c3-0.23,4.79-2.59,4.74-5.68c-0.04-3.04-1.97-5.19-5.01-5.45c-1.61-0.14-3.23-0.12-4.85-0.12c-4.02-0.02-4.02-0.01-4.02,4.06C288.48,79.51,288.48,81.89,288.48,84.37z M288.63,57.8c0,3.29,0,6.49,0,9.77c2.8,0,5.48,0.18,8.13-0.05c2.48-0.22,4.07-2.38,4.07-4.95c0-2.53-1.57-4.55-4.05-4.73C294.12,57.66,291.45,57.8,288.63,57.8z"></path><path fill="currentColor" d="M261.41,73.94c3.1,5.4,6.15,10.7,9.38,16.34c-2.67,0-5,0.06-7.31-0.05c-0.44-0.02-0.96-0.67-1.24-1.15c-2.2-3.89-4.41-7.78-6.5-11.73c-0.62-1.17-1.35-1.61-2.63-1.5c-1.22,0.1-2.47,0.11-3.69,0c-1.46-0.14-1.78,0.48-1.75,1.82c0.08,3.58-0.06,7.16,0.07,10.73c0.06,1.62-0.52,2.05-2,1.91c-1.16-0.11-2.35-0.09-3.52,0c-1.21,0.09-1.67-0.28-1.66-1.58c0.04-11.8,0.02-23.59,0.03-35.39c0-0.43,0.09-0.87,0.15-1.45c4.32,0,8.56-0.05,12.79,0.02c2.01,0.03,4.05,0.08,6,0.46c4.46,0.88,7.64,4.36,8.31,8.8c0.76,5.01-1.19,9.63-5.04,11.94C262.34,73.4,261.87,73.67,261.41,73.94z M247.71,63.85c0,1.67-0.06,3.35,0.05,5.01c0.03,0.4,0.63,1.08,0.99,1.09c2.28,0.08,4.58,0.16,6.85-0.06c3.29-0.32,5.2-2.67,5.25-6.06c0.04-3.4-1.49-5.44-4.88-5.88c-2.41-0.31-4.89-0.2-7.34-0.15c-0.31,0.01-0.84,0.76-0.86,1.2C247.65,60.61,247.71,62.23,247.71,63.85z"></path><path fill="currentColor" d="M366.71,146.13c-2.66,0-4.94,0.07-7.21-0.06c-0.49-0.03-1.08-0.69-1.38-1.2c-2.21-3.89-4.39-7.79-6.5-11.73c-0.54-1.01-1.17-1.51-2.35-1.43c-1.39,0.09-2.8,0.07-4.19,0.01c-1.1-0.04-1.44,0.41-1.43,1.49c0.05,3.8-0.02,7.6,0.04,11.41c0.02,1.16-0.33,1.62-1.51,1.55c-1.39-0.07-2.8-0.06-4.19,0c-1.04,0.04-1.49-0.27-1.49-1.42c0.03-11.91,0.02-23.82,0.03-35.73c0-0.32,0.09-0.64,0.16-1.16c1.54,0,3.04-0.02,4.53,0c4.47,0.08,8.96-0.12,13.39,0.34c5,0.51,8.3,3.96,9.15,8.69c0.92,5.16-1.17,9.93-5.42,12.37c-0.33,0.19-0.65,0.39-1,0.6C360.42,135.2,363.45,140.46,366.71,146.13z M343.68,119.6c0,1.68-0.06,3.36,0.04,5.03c0.03,0.44,0.56,1.21,0.87,1.22c2.51,0.04,5.04,0.14,7.52-0.19c3.05-0.4,4.73-2.86,4.65-6.19c-0.08-3.28-1.63-5.22-4.83-5.59c-2.32-0.27-4.68-0.18-7.02-0.27c-0.95-0.04-1.27,0.39-1.25,1.31C343.71,116.47,343.68,118.03,343.68,119.6z"></path><path fill="currentColor" d="M150.82,121.33c0-4.02,0.06-8.05-0.03-12.07c-0.04-1.51,0.49-1.99,1.93-1.87c1.17,0.1,2.35,0.09,3.52,0c1.31-0.09,1.73,0.4,1.72,1.72c-0.06,7.26-0.03,14.53-0.03,21.79c0,7.87,6.67,12.04,13.86,8.63c2.99-1.42,4.35-3.92,4.36-7.15c0.03-7.54,0.01-15.09,0.01-22.63c0-2.34,0-2.38,2.39-2.33c1.54,0.03,3.57-0.35,4.46,0.47c0.78,0.71,0.31,2.83,0.31,4.32c0.02,6.43,0.01,12.85,0.01,19.28c0,8.7-5.4,14.51-14.12,15.18c-3.56,0.27-7.05-0.03-10.31-1.6c-4.97-2.38-7.76-6.32-7.98-11.84c-0.16-3.96-0.03-7.93-0.03-11.9C150.86,121.33,150.84,121.33,150.82,121.33z"></path><path fill="currentColor" d="M491.88,51.88c0,1.98,0,3.75,0,5.74c-0.58,0.04-1.17,0.11-1.75,0.11c-4.47,0.01-8.94,0.04-13.41-0.01c-1.15-0.01-1.58,0.33-1.54,1.52c0.07,2.46,0.07,4.92,0,7.38c-0.03,1.12,0.39,1.43,1.46,1.42c3.91-0.05,7.82-0.02,11.88-0.02c0,1.94,0,3.79,0,5.86c-3.65,0-7.26,0-10.88,0c-2.45,0-2.45,0-2.45,2.42c0,2.18,0.06,4.36-0.02,6.54c-0.05,1.24,0.36,1.65,1.61,1.63c4.75-0.06,9.5,0.02,14.25-0.05c1.37-0.02,1.84,0.36,1.83,1.77c-0.02,4.11,0.04,4.11-4,4.11c-6.37,0-12.74-0.03-19.11,0.03c-1.24,0.01-1.65-0.36-1.65-1.61c0.04-11.74,0.02-23.47,0.03-35.21c0-0.74-0.19-1.63,1.08-1.62C476.7,51.89,484.19,51.88,491.88,51.88z"></path><path fill="currentColor" d="M301.32,107.96c7.88,0,15.66,0,23.65,0c0,1.65,0.09,3.21-0.07,4.74c-0.03,0.34-0.91,0.84-1.4,0.85c-4.41,0.07-8.83,0.1-13.24,0.01c-1.6-0.03-2.18,0.43-2.08,2.07c0.13,2.17,0.1,4.36,0.01,6.53c-0.06,1.37,0.37,1.86,1.79,1.83c3.85-0.08,7.7-0.03,11.83-0.03c0,1.71,0.09,3.32-0.07,4.9c-0.03,0.34-0.92,0.85-1.42,0.86c-3.46,0.08-6.93,0.08-10.39,0.02c-1.26-0.02-1.81,0.32-1.75,1.69c0.1,2.34,0.1,4.7,0,7.04c-0.06,1.45,0.38,1.96,1.88,1.93c4.52-0.09,9.05-0.03,13.58-0.03c0.67,0,1.33,0,2.14,0c0,1.88,0,3.64,0,5.61c-0.46,0.05-0.99,0.15-1.51,0.15c-7.15,0.01-14.3-0.01-21.46,0.02c-1.04,0-1.63-0.14-1.63-1.43c0.04-11.9,0.03-23.8,0.03-35.7C301.21,108.7,301.27,108.38,301.32,107.96z"></path><path fill="currentColor" d="M491.91,107.86c0,1.96,0,3.67,0,5.59c-0.65,0.05-1.29,0.14-1.94,0.14c-4.3,0.01-8.61,0.06-12.91-0.02c-1.5-0.03-1.94,0.47-1.86,1.92c0.11,2.29,0.09,4.58,0.01,6.87c-0.05,1.25,0.38,1.65,1.63,1.63c3.85-0.06,7.71-0.02,11.85-0.02c0,1.75,0.07,3.4-0.06,5.04c-0.02,0.29-0.89,0.72-1.37,0.73c-3.3,0.07-6.6,0.03-9.89,0.04c-0.66,0-1.31,0.06-2.12,0.11c0,3.28,0,6.4,0,9.52c0,1.16,0.87,0.97,1.56,0.97c4.7,0.01,9.39,0.01,14.09,0.01c0.6,0,1.2,0,2.02,0c0,1.75,0.1,3.31-0.07,4.84c-0.04,0.36-1,0.88-1.55,0.88c-6.54,0.06-13.08,0.04-19.62,0.04c-3.47,0-3.47,0-3.47-3.45c0-10.96,0.02-21.91-0.03-32.87c-0.01-1.46,0.31-2.03,1.93-2.01c6.71,0.09,13.42,0.04,20.12,0.04C490.71,107.86,491.21,107.86,491.91,107.86z"></path><path fill="currentColor" d="M396.82,116.31c-2.41-0.96-4.52-1.98-6.75-2.63c-2.01-0.58-4.12-0.44-6.03,0.62c-3.08,1.71-3.33,5.24-0.38,7.16c1.62,1.06,3.49,1.73,5.26,2.56c2.22,1.05,4.53,1.94,6.64,3.17c7.49,4.41,5.85,14.49-0.72,17.84c-4.85,2.48-9.86,2.25-14.8,0.43c-2.25-0.83-4.29-2.25-6.64-3.52c1.51-2.01,2.73-3.64,4-5.32c0.91,0.6,1.68,1.15,2.48,1.64c2.65,1.6,5.48,2.49,8.62,2.21c2.51-0.22,4.32-1.64,4.8-3.74c0.44-1.92-0.38-3.58-2.71-4.87c-1.8-1-3.75-1.72-5.6-2.64c-2.15-1.06-4.41-1.98-6.36-3.34c-5.17-3.6-5.66-10.37-1.18-14.81c3.7-3.66,8.36-4.48,13.21-3.66c2.68,0.46,5.22,1.81,7.79,2.84c1,0.4,1.23,1.12,0.58,2.13C398.19,113.7,397.49,115.1,396.82,116.31z"></path><path fill="currentColor" d="M150.22,85.58c1.18-1.56,2.38-3.16,3.65-4.85c1.03,0.66,1.96,1.35,2.97,1.9c2.8,1.52,5.74,2.51,8.99,1.8c2.26-0.49,3.63-1.83,3.97-3.79c0.37-2.16-0.78-3.58-2.48-4.52c-1.94-1.08-4.03-1.9-6.04-2.88c-2-0.98-4.1-1.83-5.93-3.07c-5.71-3.88-5.96-11.47-0.55-15.81c4.11-3.29,8.9-3.77,13.82-2.61c2.23,0.53,4.32,1.73,6.44,2.68c0.84,0.37,1.09,0.98,0.53,1.88c-0.85,1.37-1.59,2.81-2.46,4.36c-0.58-0.34-1.09-0.65-1.6-0.94c-2.87-1.67-5.87-2.78-9.25-1.99c-0.85,0.2-1.71,0.58-2.41,1.09c-2.4,1.75-2.49,4.78-0.05,6.47c1.58,1.1,3.44,1.81,5.19,2.66c2.45,1.19,5.09,2.11,7.36,3.58c5.77,3.75,6.13,11.71,0.92,16.21C167.65,92.68,155.16,91.55,150.22,85.58z"></path><path fill="currentColor" d="M256.88,107.87c2.41,0,4.63-0.06,6.84,0.05c0.4,0.02,0.95,0.68,1.11,1.16c3.26,9.5,6.47,19.02,9.69,28.54c0.07,0.2,0.17,0.39,0.32,0.74c0.2-0.35,0.37-0.57,0.46-0.81c3.23-9.45,6.47-18.9,9.65-28.37c0.35-1.03,0.86-1.38,1.92-1.34c1.94,0.08,3.9,0.02,6.03,0.02c-0.2,0.64-0.32,1.12-0.49,1.57c-4.46,11.74-8.94,23.48-13.36,35.24c-0.43,1.14-0.99,1.58-2.18,1.5c-1.78-0.12-3.98,0.51-5.23-0.33c-1.24-0.83-1.57-3.06-2.2-4.72c-4-10.48-7.98-20.98-11.96-31.47C257.29,109.13,257.13,108.61,256.88,107.87z"></path><path fill="currentColor" d="M446.49,146.13c-2.14,0-4.15,0.07-6.14-0.07c-0.33-0.02-0.83-1.02-0.83-1.56c-0.06-7.6-0.04-15.2-0.04-22.8c0-2.12-0.07-4.25,0.03-6.37c0.06-1.32-0.38-1.77-1.7-1.74c-3.3,0.07-6.6-0.03-9.89,0.04c-1.25,0.03-1.71-0.37-1.62-1.63c0.09-1.27,0.02-2.56,0.02-3.98c11.15,0,22.18,0,33.32,0c0,1.78,0,3.53,0,5.59c-1.69,0-3.34,0-4.99,0c-2.12,0-4.25,0.06-6.37-0.02c-1.32-0.05-1.7,0.44-1.7,1.74c0.05,9.5,0.03,19,0.02,28.51C446.6,144.53,446.53,145.24,446.49,146.13z"></path><path fill="currentColor" d="M411.07,107.95c2.21,0,4.37,0,6.72,0c0.03,0.6,0.09,1.19,0.09,1.78c0.01,11.5-0.03,23,0.04,34.5c0.01,1.58-0.49,2.06-1.98,1.94c-1.28-0.1-2.57-0.04-3.85-0.02c-0.82,0.02-1.22-0.26-1.22-1.15c0.04-12.22,0.06-24.45,0.08-36.67C410.96,108.27,410.99,108.22,411.07,107.95z"></path><path fill="currentColor" d="M241.55,107.87c2.18,0,4.17-0.03,6.16,0.04c0.3,0.01,0.7,0.45,0.83,0.78c0.15,0.39,0.07,0.88,0.07,1.33c0,11.33-0.03,22.66,0.04,34c0.01,1.68-0.44,2.34-2.16,2.16c-1.54-0.17-3.76,0.45-4.49-0.35c-0.83-0.92-0.43-3.03-0.43-4.62c-0.02-10.38-0.01-20.77-0.01-31.15C241.55,109.39,241.55,108.73,241.55,107.87z"></path><path fill="currentColor" d="M42.58,61.82c0-5-0.05-9.8,0.02-14.6c0.03-1.74,1.52-3.02,3.2-3.04c1.79-0.01,3.25,1.37,3.28,3.33c0.07,3.63,0.02,7.27,0.02,10.9c0,1.1,0,2.2,0,3.41C46.88,61.82,44.84,61.82,42.58,61.82z"></path><path fill="currentColor" d="M63.08,61.83c-2.25,0-4.24,0-6.34,0c-0.05-0.46-0.14-0.89-0.14-1.31c-0.01-4.24-0.02-8.48,0-12.72c0.01-2.14,1.26-3.55,3.12-3.61c1.91-0.07,3.33,1.38,3.35,3.57C63.11,52.38,63.08,57.01,63.08,61.83z"></path><path fill="currentColor" d="M77.07,61.84c-2.23,0-4.22,0-6.31,0c-0.07-0.49-0.17-0.91-0.17-1.34c-0.01-4.18-0.02-8.37,0-12.55c0.01-2.34,1.35-3.82,3.32-3.77c1.9,0.05,3.15,1.51,3.16,3.76C77.08,52.51,77.07,57.08,77.07,61.84z"></path><path fill="currentColor" d="M489.03,97.87c-1.97,2.44-3.63,4.53-5.34,6.59c-0.25,0.3-0.73,0.55-1.11,0.57c-1.49,0.07-2.99,0.03-4.86,0.03c1.43-2.45,2.7-4.64,4.02-6.81c0.13-0.22,0.57-0.35,0.87-0.35C484.61,97.85,486.61,97.87,489.03,97.87z"></path><path fill="currentColor" d="M56.94,21.33c0-2.16-0.07-4.04,0.02-5.92c0.07-1.6,1.3-2.71,2.82-2.74c1.51-0.03,2.8,1.04,2.91,2.62c0.12,1.66,0.1,3.34,0.02,5c-0.02,0.36-0.57,0.97-0.91,0.99C60.26,21.39,58.71,21.33,56.94,21.33z"></path></g>
                </svg>
            </a>
        </div>
        <div className="footer-block">
            <p> Pour nous rendre visite : Maison de la Recherche, 28 rue Serpente,
                75006 Paris, Bureau S007.
            </p>
            <p>Pour nous contacter : <a href="mailto:lettres-ceres@sorbonne-universite.fr">lettres-ceres@sorbonne-universite.fr</a></p>
        </div>
    </footer>)