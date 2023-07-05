import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export const usechangehighpass = () =>
{
    const [passhighorshow, sethighorshow] = useState(true);
    const [iconshow, seticonshow] = useState('eye');
    const handlePasswordvsblt = () =>{
        if(iconshow === 'eye')
        {
        seticonshow('eys-off');
        sethighorshow(!passhighorshow);
        }
        else if (iconshow === 'eye-off')
        {
            seticonshow('eys');
            sethighorshow(!passhighorshow);
        }
    };
    return 
    {
        passhighorshow
        iconshow
        handlePasswordvsblt
    };
}
