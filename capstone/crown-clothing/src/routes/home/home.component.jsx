import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://imgs.search.brave.com/ybTUGw0n61uvgHTjH7_DfPyyGGdMUjVIyDnZd5Kh8_M/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/bS1TUnpJbkptNEFI/Slg4WkZLY2RnSGFI/YSZwaWQ9QXBp",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://imgs.search.brave.com/kaVy7O0wG7AafWWDS4OWFFo4YgTL-sSCKEyOWlTN3HE/rs:fit:326:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/N1lCTlBQYkhXSTdu/RkNPZ2lHMEJnSGFL/dyZwaWQ9QXBp",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://imgs.search.brave.com/teqoXztqFAplDNthQCAkfAgZPXETehuQk84vY8Fx5AE/rs:fit:631:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/RGYzRko3ZjlHYTZD/T1ltNURkZFJBSGFG/ayZwaWQ9QXBp",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://imgs.search.brave.com/WxvBbZVjx1kDuv4qdmjX4I7GwalJYzfzoO4CS3JW59M/rs:fit:347:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/ZjVpNGxWX2poNVJL/NXdQSl9HM2t3SGFL/RyZwaWQ9QXBp",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://imgs.search.brave.com/lqyeHV7wYXKj2tLzeMilkf8cq33SvUPUtqqO1DQkp9I/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/TUs0cXhLTTh4eTBR/ZDdneHBfTm5BSGFM/RiZwaWQ9QXBp",
    },
  ];

  return (
    <div className="container">
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
