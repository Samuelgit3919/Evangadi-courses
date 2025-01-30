import { useState, useEffect } from 'react'

const UseEffectForTitle = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    // useEffect(() => {
    //     alert('Component mounted')
    // }, [])

    const increaseCount = () => setCount(count + 1)
    return (
        <div className='min-h-screen pt-8 bg-gray-200 text-center'>
            <button
                className='bg-teal-600 text-white px-6 py-3 rounded-lg teal:bg-green-700 transition mb-4'
                onClick={increaseCount}>
                Click Here
            </button>
            <p className="text-xl font-semibold mb-4">{`Count Displayer: ${count}`}</p>

        </div>
    )
}

export default UseEffectForTitle