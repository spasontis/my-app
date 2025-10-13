import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { useTranslations } from "@/shared/configs/i18n";
import { PROJECT_NAME } from "@/shared/constants";

import { Header } from "../ui/Header";

const meta = {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: PROJECT_NAME,
  },
};

export const i18n: Story = {
  render: (args) => {
    const t = useTranslations();

    return <Header label={t(args.label)} />;
  },
  args: {
    label: "project.name",
  },
};
