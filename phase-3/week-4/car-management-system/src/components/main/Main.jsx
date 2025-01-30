
import { useState, useMemo } from "react";

function MainComponent() {
    const [cars, setCars] = useState([
        {
            vehicle: "2018 Chevrolet Colorado LT",
            stock: "RL333228A",
            age: 9,
            detailed: "No",
            location: "Detail lot",
            verified: "Yes",
            notes: "",
            status: "unavailable",
        },
        {
            vehicle: "2022 Hyundai Tucson SEL",
            stock: "RG337241B",
            age: 13,
            detailed: "Yes",
            location: "Chevy lot",
            verified: "Yes",
            notes: "",
            status: "available",
        },
    ]);

    const [filters, setFilters] = useState({
        vehicle: "",
        location: "",
        status: "",
    });

    const filteredCars = useMemo(() => {
        return cars.filter((car) => {
            return (
                car.vehicle.toLowerCase().includes(filters.vehicle.toLowerCase()) &&
                car.location.toLowerCase().includes(filters.location.toLowerCase()) &&
                (filters.status === "" || car.status === filters.status)
            );
        });
    }, [cars, filters]);

    const [isAdmin, setIsAdmin] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingCar, setEditingCar] = useState(null);
    const [newCar, setNewCar] = useState({
        vehicle: "",
        stock: "",
        age: 0,
        detailed: "No",
        location: "",
        verified: "No",
        notes: "",
        status: "available",
    });

    const handleAddCar = () => {
        setCars([...cars, newCar]);
        setShowAddModal(false);
        setNewCar({
            vehicle: "",
            stock: "",
            age: 0,
            detailed: "No",
            location: "",
            verified: "No",
            notes: "",
            status: "available",
        });
    };

    const handleEditCar = (car) => {
        const updatedCars = cars.map((c) =>
            c.stock === editingCar.stock ? car : c
        );
        setCars(updatedCars);
        setEditingCar(null);
    };

    const handleDeleteCar = (stock) => {
        setCars(cars.filter((car) => car.stock !== stock));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold font-roboto">Available Cars</h1>
                    <button
                        onClick={() => setIsAdmin(!isAdmin)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Switch to {isAdmin ? "User" : "Admin"} View
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4 font-roboto">
                        Search Cars
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            placeholder="Search by Vehicle Model"
                            className="border p-2 rounded"
                            value={filters.vehicle}
                            onChange={(e) =>
                                setFilters((prev) => ({ ...prev, vehicle: e.target.value }))
                            }
                        />
                        <input
                            placeholder="Search by Location"
                            className="border p-2 rounded"
                            value={filters.location}
                            onChange={(e) =>
                                setFilters((prev) => ({ ...prev, location: e.target.value }))
                            }
                        />
                        <select
                            className="border p-2 rounded"
                            value={filters.status}
                            onChange={(e) =>
                                setFilters((prev) => ({ ...prev, status: e.target.value }))
                            }
                        >
                            <option value="">All Cars</option>
                            <option value="available">Available Only</option>
                            <option value="unavailable">Unavailable Only</option>
                        </select>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="p-4 text-left border-b font-roboto">Vehicle</th>
                                <th className="p-4 text-left border-b font-roboto">Stock #</th>
                                <th className="p-4 text-left border-b font-roboto">Location</th>
                                <th className="p-4 text-left border-b font-roboto">Status</th>
                                {isAdmin && (
                                    <>
                                        <th className="p-4 text-left border-b font-roboto">Age</th>
                                        <th className="p-4 text-left border-b font-roboto">
                                            Detailed
                                        </th>
                                        <th className="p-4 text-left border-b font-roboto">
                                            Verified
                                        </th>
                                        <th className="p-4 text-left border-b font-roboto">
                                            Notes
                                        </th>
                                    </>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCars.map((car, index) => (
                                <tr
                                    key={index}
                                    className={`
        ${car.status === "available" ? "bg-green-100" : "bg-yellow-100"}
        hover:bg-gray-50
      `}
                                >
                                    <td className="p-4 border-b">{car.vehicle}</td>
                                    <td className="p-4 border-b">{car.stock}</td>
                                    <td className="p-4 border-b">{car.location}</td>
                                    <td className="p-4 border-b">
                                        <span
                                            className={`px-2 py-1 rounded ${car.status === "available"
                                                ? "bg-green-500 text-white"
                                                : "bg-yellow-500 text-white"
                                                }`}
                                        >
                                            {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                                        </span>
                                    </td>
                                    {isAdmin && (
                                        <>
                                            <td className="p-4 border-b">{car.age} days</td>
                                            <td className="p-4 border-b">{car.detailed}</td>
                                            <td className="p-4 border-b">{car.verified}</td>
                                            <td className="p-4 border-b">{car.notes || "-"}</td>
                                            <td className="p-4 border-b">
                                                <button
                                                    onClick={() => setEditingCar(car)}
                                                    className="text-blue-500 hover:text-blue-700 mr-2"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteCar(car.stock)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {isAdmin && (
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Add New Car
                        </button>
                    </div>
                )}

                {showAddModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full">
                            <h2 className="text-xl font-bold mb-4">Add New Car</h2>
                            <input
                                className="w-full mb-2 p-2 border rounded"
                                placeholder="Vehicle Model"
                                value={newCar.vehicle}
                                onChange={(e) =>
                                    setNewCar({ ...newCar, vehicle: e.target.value })
                                }
                            />
                            <input
                                className="w-full mb-2 p-2 border rounded"
                                placeholder="Stock Number"
                                value={newCar.stock}
                                onChange={(e) =>
                                    setNewCar({ ...newCar, stock: e.target.value })
                                }
                            />
                            <input
                                className="w-full mb-2 p-2 border rounded"
                                placeholder="Location"
                                value={newCar.location}
                                onChange={(e) =>
                                    setNewCar({ ...newCar, location: e.target.value })
                                }
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={handleAddCar}
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                >
                                    Add Car
                                </button>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {editingCar && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full">
                            <h2 className="text-xl font-bold mb-4">Edit Car</h2>
                            <input
                                className="w-full mb-2 p-2 border rounded"
                                placeholder="Vehicle Model"
                                value={editingCar.vehicle}
                                onChange={(e) =>
                                    setEditingCar({ ...editingCar, vehicle: e.target.value })
                                }
                            />
                            <input
                                className="w-full mb-2 p-2 border rounded"
                                placeholder="Location"
                                value={editingCar.location}
                                onChange={(e) =>
                                    setEditingCar({ ...editingCar, location: e.target.value })
                                }
                            />
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEditCar(editingCar)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                                <button
                                    onClick={() => setEditingCar(null)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainComponent;
