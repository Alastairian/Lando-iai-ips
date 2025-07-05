import type { NextApiRequest, NextApiResponse } from 'next';
import { executeIQCL } from '../../utils/iqcl';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const { command } = req.body;
    const result = executeIQCL(command || '');
    return res.status(200).json(result);
}
