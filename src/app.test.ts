import { App } from './app';

describe('App', () => {
  const app = new App()

  it('run', () => {
    jest.spyOn(global.console, 'log')

    app.run()

    expect(console.log).toBeCalledWith('It\'s running')
  })
})
