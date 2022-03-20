import * as React from 'react'
import { useEffect, useState } from 'react'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import ProjectColumn from './ProjectColumn'
import Box from '@mui/material/Box'
import NewProjectForm from './NewProjectForm'
import { ADDPROJECT } from './constants/Modes'

export default function ProjectView (props) {
  const { user, currentProject } = props
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (currentProject) { 
      setColumns(currentProject.Columns);
    }
  }, [currentProject])

  const generatedColumns = columns.map(column =>
    <ProjectColumn
      user={user}
      title={column.name}
      column={column}
		/>
	)
    if (mode === ADDPROJECT) {
      return (
        <Box>
          <NewProjectForm/>
        </Box>
      )
    } else {
      return (
        <Box>
          {generatedColumns}
        </Box>
      )
    }
  
}
