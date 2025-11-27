import Employee from '../Models/EmployeeModel.js';

export const listEmployees = async (req, res, next) => {
  try {
    let { search, designation, sort, order='asc', page=1, limit=5 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const filter = {};
    if(search) {
      const regex = new RegExp(search, 'i');
      filter.$or = [{ name: regex }, { email: regex }, { mobile: regex }, { designation: regex }];
    }
    if(designation) filter.designation = designation;

    let query = Employee.find(filter);

    if(sort) {
      const sortObj = {};
      sortObj[sort] = order === 'asc' ? 1 : -1;
      query = query.sort(sortObj);
    } else {
      query = query.sort({ createDate: -1 });
    }

    const total = await Employee.countDocuments(filter);
    const results = await query.skip((page - 1) * limit).limit(limit);

    res.json({ data: results, total, page, pages: Math.ceil(total / limit) });
  } catch(err){ next(err); }
};

export const addEmployee = async (req, res, next) => {
  try {
    const { name, email, mobile, designation, salary } = req.body;
    const payload = { name, email, mobile, designation, salary };
    if(req.file) payload.image = `/uploads/${req.file.filename}`;

    const emp = await Employee.create(payload);
    res.status(201).json(emp);
  } catch(err){ next(err); }
};

export const getEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if(!emp) return res.status(404).json({ message: 'Not found' });
    res.json(emp);
  } catch(err){ next(err); }
};

export const updateEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if(!emp) return res.status(404).json({ message: 'Not found' });

    const { name, email, mobile, designation, salary } = req.body;
    emp.name = name ?? emp.name;
    emp.email = email ?? emp.email;
    emp.mobile = mobile ?? emp.mobile;
    emp.designation = designation ?? emp.designation;
    emp.salary = salary ?? emp.salary;
    if(req.file) emp.image = `/uploads/${req.file.filename}`;

    await emp.save();
    res.json(emp);
  } catch(err){ next(err); }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.findByIdAndDelete(req.params.id);
    if(!emp) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch(err){ next(err); }
};
