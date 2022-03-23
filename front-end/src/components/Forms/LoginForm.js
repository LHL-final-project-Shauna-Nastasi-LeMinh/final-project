import React, { useState } from 'react'
import axios from 'axios'
import {
	Button,
	Modal,
	Typography,
	Box,
	TextField,
	InputAdornment,
	IconButton,
	Divider,
	Paper
} from '@mui/material'
import { HowToReg, Visibility, VisibilityOff } from '@mui/icons-material'

export default function LoginForm (props) {
  const { state } = props

  const handleClickShowPassword = () => {
    if (state.formData.showPassword === true) {
      state.setFormData('showPassword', false)
    } else {
      state.setFormData('showPassword', true)
    }
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  function login () {
    state.usersList.map(user => {
      if (user.email === state.formData.email) {
        if (user.password === state.formData.password) {
          state.setStateTarget('currentUser', user)
          state.setStateTarget('currentCookies', user)
          state.setStateTarget('userLoggedIn', true)
          const userData = state.getUserData(user.id)
          console.log('userData', userData)
          state.closeModal('loginForm')
        }
      }
    })
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    height: 'fit-content',
    backgroundColor: 'primary.main',
    boxShadow: 24
  }

  return (
    <Modal
      open={state.modals.loginForm}
      onClose={() => state.closeModal('loginForm')}
      aria-labelledby='modal-login-form'
      aria-describedby='modal-modal-login-form'
		>
      <Paper sx={style}>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'background.default',
            m: 2
          }}
				>
          <Typography variant='h4' align='center'>
            <HowToReg color='secondary' fontSize='large' />
          </Typography>
          <Typography variant='h4' align='center'>
						Login
					</Typography>
        </Box>

        <Divider />

        <Box sx={{ width: '100%', backgroundColor: 'background.default' }}>
          <Box sx={{ display: 'flex' }}>
            <TextField
              sx={{ m: 2 }}
              label='Email Address'
              value={state.formData.email}
              type='email'
              onChange={state.setFormData('email')}
              helperText={state.formData.email === '' && 'Required field'}
              error={state.formData.email === ''}
              required
						/>
            <TextField
              sx={{ m: 2 }}
              label='Password'
              value={state.formData.password}
              type='password'
              onChange={state.setFormData('password')}
              helperText={state.formData.password === '' && 'Required field'}
              error={state.formData.password === ''}
              endadornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
									>
                    {state.formData.showPassword
											? <VisibilityOff />
											: <Visibility />}
                  </IconButton>
                </InputAdornment>
							}
              required
						/>
          </Box>
        </Box>

        <Divider />

        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'primary.main',
            color: 'background.default',
            my: 3
          }}
				>
          <Button
            sx={{ mx: 2, width: '100%' }}
            color='success'
            size='large'
            variant='contained'
            onClick={() => login()}
					>
						Login
					</Button>
          <Button
            sx={{ mx: 2, width: '100%' }}
            color='secondary'
            size='large'
            variant='contained'
            onClick={() => state.closeModal('loginForm')}
					>
						Cancel
					</Button>
        </Box>
      </Paper>
    </Modal>
  )
}
