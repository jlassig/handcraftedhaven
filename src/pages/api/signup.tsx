// // pages/api/signup.tsx
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { fName, lName, username, password } = req.body;

//     try {
//       await prisma.user.create({
//         data: {
//           fName,
//           lName,
//           username,
//           password,
//         },
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: 'Error creating user' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
