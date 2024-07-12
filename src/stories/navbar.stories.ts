import { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from '../app/navbar/navbar.component';

const meta = {
  title: 'Projeto/Navbar',
  component: NavbarComponent
}satisfies Meta<typeof NavbarComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {

}