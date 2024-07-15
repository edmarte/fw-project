import { Meta, StoryObj } from "@storybook/react";
import NavBar from "../components/NavBar";

const meta = {
    title: 'Project/NavBar',
    component: NavBar,
}satisfies Meta<typeof NavBar>

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = { }