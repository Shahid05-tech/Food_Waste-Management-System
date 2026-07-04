                  +----------------------+
                  |       Users          |
                  | Citizen | Collector  |
                  |          Admin       |
                  +----------+-----------+
                             |
                             ▼
               +----------------------------+
               | React + Vite Frontend      |
               +-------------+--------------+
                             |
                        REST API (Axios)
                             |
                             ▼
               +----------------------------+
               | Node.js + Express Backend  |
               +------+------+------+-------+
                      |      |      |
          +-----------+      |      +------------+
          |                  |                   |
          ▼                  ▼                   ▼
   MongoDB Atlas      Cloudinary        Google Gemini AI
   (Database)        (Image Storage)     (AI Analysis)

                      |
                      ▼
               Socket.IO Notifications

                      |
                      ▼
          Vercel + Render Deployment