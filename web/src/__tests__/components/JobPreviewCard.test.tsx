import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'

import { formatUpdatedAt } from '../../helpers'
import JobPreviewCard from '../../components/JobPreviewCard'

const jobs = require('../../../docker/db/data/jobs.json')

describe('formatUpdated Function', () => {
  const updatedAt = ''
  const formattedDate = formatUpdatedAt(updatedAt)
  it('Should return an empty string when passed a falsey value', () => {
    expect(formattedDate).toBe('')
  })
})

  // TODO accomodate fetching the latest job run in the test
test.skip('JobPreviewCard Component', () => {
  const job = jobs[0]

  const wrapper = mount(
    <MemoryRouter>
      <JobPreviewCard {...job} />
    </MemoryRouter>
  )
  it('Should render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  const componentText = wrapper.text()
  it('should render the job name', () => {
    expect(componentText).toContain(job.name)
  })
  it('should render the job description', () => {
    expect(componentText).toContain(job.description)
  })
  it('should render the job time', () => {
    expect(componentText).toContain(formatUpdatedAt(job.updatedAt))
  })
  test.skip('should render the job status', () => {
    expect(componentText).toContain(job.latestRun.runState)
  })
  // wrapping in Router produces a new key each time, which makes the snapshots not match
  test.skip('renders a snapshot that matches previous', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
