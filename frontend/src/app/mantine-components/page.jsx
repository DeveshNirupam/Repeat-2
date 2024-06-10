'use client';
import { Button, Container, Drawer, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconUser } from '@tabler/icons-react';
import React from 'react'

const MantineComponents = () => {

    const [ opened, {open, close}] = useDisclosure(false);
    return (
        <Container>
            <Input
                mt={50}
                placeholder='Enter your query'
                size='md'
                variant='filled'
                radius='md'
                //error
                rightSection={
                    <IconSearch/>
                }
            />
            <Button mt="lg" variant=' outline' color='grape' onClick={open}>open drawer</Button>
            <Drawer
             opened={opened}
              position='bottom'
               onClose={close}
               overlayProps={{backgroundOpacity: 0.5, blur:4}}>
                
                <h2>Drawer Content</h2>
            </Drawer>
        </Container>
    )
}

export default MantineComponents;