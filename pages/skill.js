
import  '../style/skills.css';
function Skills(){

    return (
        <div className="skills-container">
            <div className="frontend">
                <h1>Frontend Development Skills</h1>
                <ul>
                    <li>HTML</li>           
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                </ul>
                <div className="frameworks">
                    <h2>Framework & Libraries</h2>
                    <h3>ReactJS</h3>
                    <ul>
                       <li>JSX</li>
                       <li>Components (Functional & Class)</li>
                       <li>Props & State</li>
                       <li>Lifecycle Methods</li>
                       <li>Hooks (useState, useEffect, useContext, useRef, useReducer, useMemo, useCallback)</li>
                       <li>Context API</li>
                       <li>Event Handling</li>
                       <li>Conditional Rendering</li>
                       <li>Lists & Keys</li>
                       <li>Forms & Form Validation</li>
                       <li>React Router</li>
                       <li>State Management (Redux, Context)</li>
                       <li>API Handling in Redux</li>
                       <li>Custom Hooks</li>
                       <li>Virtual DOM in React</li>
                       <li>Deployment</li>
                   </ul>
                    
                </div>
                
            </div>
            <div className="backend">
                <h1>Backend Development Skills</h1>
                <ul>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                </ul>

                <div className="backend-frameworks">
                    <h2>Backend Framework</h2>
                    <h3>ExpressJS</h3>
                    <ul>
                        <li>RESTful APIs</li>
                        <li>Middleware in Express</li>
                        <li>Error Handling in Express</li>
                        <li>Database Integration (MongoDB, MySQL)</li>
                        <li>Data Sanitization and Schema Validation</li>
                        <li>API Level Validation and Digital Signature</li>
                        <li>Authentication & Authorization (JWT, Cookies, Refresh Token)</li>
                        <li>Environment Variables</li>
                        <li>Redis (In Memory Database)</li>
                        <li>RateLimiterRate limiter using Sliding Window</li>
                        <li>MCP (Multi-Channel Processing)</li>
                        <li>WebSocket and Socket.io</li>
                        <li>WebRTC</li>
                        <li>Deployment (Netlify, Vercel)</li>
                    </ul>
                </div>
            </div>
            <div className="version-control">
                <h1>Version Control & Tool Skills</h1>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>GitLab</li>
                    <li>Postman</li>
                    <li>Visual Studio Code</li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

module.exports = Skills;