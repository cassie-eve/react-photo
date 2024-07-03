import { Container, Image, Group } from "@mantine/core";
import photoHero from "../../assets/photo-hero.webp";

const Landing = () => {
  return (
    <Container>
      <Image src={photoHero} alt="Hero Image" style={{ width: '100%', height: 'auto' }} />
      <h1>Welcome to Photo Club!</h1>
      <p>
        Capture. Share. Inspire.
      </p>
      <p>
        At Photo Club, we believe that every picture tells a story. Whether you’re a professional photographer or just starting your journey, our platform is the perfect place to showcase your unique perspective.
      </p>
      <p>
        <strong>Share Your Work:</strong> Upload your photos, add a short description, and let your creativity shine.
      </p>
      <p>
        <strong>Discover Talent:</strong> Browse through stunning galleries from photographers around the world. Get inspired by diverse styles and techniques.
      </p>
      <p>
        <strong>Connect and Engage:</strong> Join a community of like-minded enthusiasts. Share feedback, tips, and encouragement to help each other grow.
      </p>
      <p>
        Join Photo Club today and be a part of a vibrant community where every click captures a moment, every share tells a story, and every photo inspires.
      </p>

      {/* TODO: Replace placeholder images */}
      <Group position="center" spacing="md" style={{ marginTop: '20px' }} grow>
        <Image src="https://via.placeholder.com/300x200?text=App+Screenshot+1" alt="App Screenshot 1" style={{ borderRadius: '8px' }} />
        <Image src="https://via.placeholder.com/300x200?text=App+Screenshot+2" alt="App Screenshot 2" style={{ borderRadius: '8px' }} />
        <Image src="https://via.placeholder.com/300x200?text=App+Screenshot+3" alt="App Screenshot 3" style={{ borderRadius: '8px' }} />
      </Group>
    </Container>
  );
};

export default Landing;
