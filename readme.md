                           FOODWISE
                 Food Waste Management System

+--------------------------------------------------------------+
|                         USERS                                |
|--------------------------------------------------------------|
|            Citizen      Collector      Admin                 |
+---------------------------+----------------------------------+
                            |
                            | HTTPS Requests
                            ▼
+--------------------------------------------------------------+
|                    REACT + VITE FRONTEND                     |
|--------------------------------------------------------------|
| • Login / Register                                            |
| • Dashboard                                                   |
| • Report Creation                                             |
| • Waste Map                                                   |
| • Leaderboard                                                 |
| • Notifications                                               |
+---------------------------+----------------------------------+
                            |
                    Axios REST API
                            |
                            ▼
+--------------------------------------------------------------+
|                NODE.JS + EXPRESS BACKEND                     |
|--------------------------------------------------------------|
| • JWT Authentication                                          |
| • Report Management                                           |
| • AI Processing                                               |
| • Admin Analytics                                             |
| • Notification Service                                        |
| • Socket.IO Server                                            |
+---------+---------------+---------------+--------------------+
          |               |               |
          |               |               |
          ▼               ▼               ▼
+----------------+ +----------------+ +----------------------+
| MongoDB Atlas  | | Cloudinary     | | Google Gemini AI     |
|----------------| |----------------| |----------------------|
| Users          | | Store Images   | | Image Analysis       |
| Reports        | | Image URLs     | | Food Type            |
| Notifications  | |                | | Quantity             |
| Leaderboard    | |                | | Edibility            |
+----------------+ +----------------+ | Urgency              |
                                      +----------------------+
          |
          ▼
+--------------------------------------------------------------+
|                  SOCKET.IO (Real-Time)                       |
|--------------------------------------------------------------|
| • Report Accepted                                             |
| • Report Collected                                            |
| • Instant Notifications                                       |
+--------------------------------------------------------------+
          |
          ▼
+--------------------------------------------------------------+
|                  DEPLOYMENT                                  |
|--------------------------------------------------------------|
| Frontend  → Vercel                                            |
| Backend   → Render                                            |
| Database  → MongoDB Atlas                                     |
| Images    → Cloudinary                                        |
| AI        → Google Gemini API                                 |
+--------------------------------------------------------------+