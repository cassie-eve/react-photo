import { useLoaderData } from "react-router-dom";
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './PostDetails.module.css';
import axios from "axios";
import DOMAIN from "../../services/endpoint";

const PostDetailsPage = () => {
  const post = useLoaderData();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Image src={post.image} alt={post.title} className={classes.image} />
      </Card.Section>

      <Card.Section p="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {post.title}
          </Text>
          <Badge size="sm" variant="light">
            {post.category}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {post.content}
        </Text>
        <Text fz="sm" mt="xs">
          Photographer: {post.username}
        </Text>
      </Card.Section>

      <Group mt="xs" p="md">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export const postDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await axios.get(`${DOMAIN}/api/posts/${id}`);
  return res.data;
};

export default PostDetailsPage;
